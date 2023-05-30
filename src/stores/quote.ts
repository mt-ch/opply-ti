import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ApiGetQuotesResponse } from '../types/api/quote'

/**
 * =============================================================================
 *  useQuoteStore
 * =============================================================================
 */

export const useQuoteStore = defineStore('quoteStore', () => {
  // State
  const quotesData = ref<ApiGetQuotesResponse>()
  const model = ref<any>()
  const isGetLoading = ref<boolean>(true)

  // Export
  return {
    quotesData,
    model,
    isGetLoading,
  }
})
