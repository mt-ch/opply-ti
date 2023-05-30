<template>
  <div class="h-[60vh] flex flex-col gap-4 items-center justify-center">
    <ExclamationCircleIcon class="h-12 w-12 text-indigo-600" />
    <p class="text-lg text-black font-medium">No Results found</p>
    <a
      :href="href"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >Go back</a
    >
  </div>
</template>

<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'

defineProps({
  href: {
    type: String,
    default: '/',
    required: true
  }
})
</script>
