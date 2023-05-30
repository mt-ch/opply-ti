<template>
  <component
    :is="componentType"
    :href="quote.supplier_id ? `/supplier/${quote.supplier_id}` : null"
    :class="[
      'relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm',
      componentType === 'a'
        ? 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'
        : null,
    ]"
  >
    <div class="flex flex-col gap-2 w-full">
      <p class="text-sm font-medium text-gray-900 line-clamp-2">{{ quote.title }}</p>
      <div class="flex w-full justify-between">
        <p class="text-sm text-gray-500 capitalize">{{ quoteDate }}</p>
        <p class="text-sm font-bold text-blue-500">{{ quotePrice }}</p>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { Quote } from '@/types/api/quote'
import currency from 'currency.js'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { computed, toRefs } from 'vue'
dayjs.extend(relativeTime)
const props = defineProps<{
  quote: Quote
}>()

const { quote } = toRefs(props)

const quotePrice = computed(() => {
  return currency(quote.value.amount, { precision: 2, symbol: '£' }).format()
})

const quoteDate = computed(() => {
  return dayjs(quote.value.created).fromNow()
})

const componentType = computed<'a' | 'div'>(() => (quote.value.supplier_id ? 'a' : 'div'))
</script>
