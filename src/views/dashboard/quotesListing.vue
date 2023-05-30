<template>
  <LayoutDefault title="Quotes">
    <template v-if="!isGetLoading">
      <template v-if="quotesData">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <QuoteCard v-for="(quotes, index) in quotesData?.results" :key="index" :quote="quotes" />
        </div>
        <Pagination :total-results="quotesData?.count" />
      </template>
      <NoResults v-else href="/quotes" />
    </template>
    <div v-else class="h-[60vh] flex items-center justify-center">
      <Loader class="h-16 w-16 text-indigo-600" />
    </div>
  </LayoutDefault>
</template>
<script setup lang="ts">
import { onMounted, toRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useApiQuotes } from '@/composbles/api/quotes'
import { useQuoteStore } from '@/stores/quote'

import LayoutDefault from '@/layouts/default.vue'

import Loader from '@/components/application/loader.vue'
import QuoteCard from '@/components/structure/card/quote.vue'
import Pagination from '@/components/application/pagination.vue'
import NoResults from '@/components/structure/no-results.vue'

const { getQuotes } = useApiQuotes()
const { quotesData, isGetLoading } = storeToRefs(useQuoteStore())

const route = useRoute()
const routeQuery = toRef(route, 'query')

watch(routeQuery, () => {
  getQuotes()
})

onMounted(() => {
  getQuotes()
})
</script>
