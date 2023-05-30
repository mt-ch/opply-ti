import { storeToRefs } from 'pinia'
import repositories from '@/api'
import { useQuoteStore } from '@/stores/quote'
import { useAuthStore } from '@/stores/auth'
import { useApiAuth } from '@/composbles/api/auth'

export const useApiQuotes = () => {
  const { authHeaders, authToken } = storeToRefs(useAuthStore())
  const { logout } = useApiAuth()
  const { quotesApi } = repositories
  const { quotesData, isGetLoading } = storeToRefs(useQuoteStore())

  /**
   * ---------------------------------------------------------------------------
   *  Get all quotes
   * ---------------------------------------------------------------------------
   */

  const getQuotes = async () => {
    try {
      isGetLoading.value = true
      if (!authToken.value) {
        logout()
        return
      }
      const response = await quotesApi.getQuotes(authHeaders.value)
      quotesData.value = response
    } catch (error) {
    } finally {
      isGetLoading.value = false
    }
  }

  return {
    getQuotes,
  }
}
