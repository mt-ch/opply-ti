<template>
  <div>
    <p class="text-sm text-gray-700">
      Showing
      {{ ' ' }}
      <span class="font-medium">{{ startResult }}</span>
      {{ ' ' }}
      to
      {{ ' ' }}
      <span class="font-medium">{{ endResult }}</span>
      {{ ' ' }}
      of
      {{ ' ' }}
      <span class="font-medium">{{ totalResults }}</span>
      {{ ' ' }}
      results
    </p>
  </div>
  <div class="flex items-center justify-between bg-white">
    <div class="flex flex-1 justify-between">
      <button
        type="button"
        @click="previousPage"
        :disabled="currentPage === 1"
        :class="[
          'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700',
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50',
        ]"
      >
        Previous
      </button>
      <button
        type="button"
        @click="nextPage"
        :disabled="currentPage === totalPages"
        :class="[
          'relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700',
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50',
        ]"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { LocationQueryValue, useRoute, useRouter } from 'vue-router'

const props = defineProps({
  totalResults: {
    type: Number,
    required: true,
  },
  resultsPerPage: {
    type: Number,
    default: 10,
  },
})

const route = useRoute()
const router = useRouter()

const currentPage = ref(parseInt(route.query.page as string) || 1)

const totalPages = computed(() => Math.ceil(props.totalResults / props.resultsPerPage))

const startResult = computed(() => (currentPage.value - 1) * props.resultsPerPage + 1)

const endResult = computed(() => Math.min(currentPage.value * props.resultsPerPage, props.totalResults))

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    updateQueryParam()
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    updateQueryParam()
  }
}

function gotoPage(pageNumber: number) {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber
    updateQueryParam()
  }
}

function updateQueryParam() {
  router.push({ query: { ...route.query, page: currentPage.value.toString() } })
}
</script>
