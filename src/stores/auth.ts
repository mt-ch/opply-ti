import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { RouteLocationNormalized } from 'vue-router'
import type { User } from '@/types/api/user'
import { AuthApiError } from '@/types/api/auth'

/**
 * =============================================================================
 *  Types
 * =============================================================================
 */

interface State {
  authToken: string
  user: User | null
  returnRoute: RouteLocationNormalized | null
  loading: boolean
  errors: AuthApiError | null
}

/**
 * =============================================================================
 *  Static variables
 * =============================================================================
 */

const defaultState: State = {
  authToken: '',
  user: null,
  returnRoute: null,
  loading: false,
  errors: null,
}

/**
 * =============================================================================
 *  useAuthStore
 * =============================================================================
 */

export const useAuthStore = defineStore(
  'authStore',
  () => {
    // State
    const authToken = ref<State['authToken']>(defaultState.authToken)
    const user = ref<State['user']>(defaultState.user)
    const returnRoute = ref<State['returnRoute']>(defaultState.returnRoute)
    const isLoading = ref<State['loading']>(defaultState.loading)
    const errors = ref<State['errors']>(defaultState.errors)

    // Computed
    const isAuthenticated = computed<boolean>(() => !!authToken.value)
    const userId = computed<string>(() => user.value?.id || '')
    const authHeaders = computed<Record<string, string> | {}>(() => {
      return authToken?.value
        ? {
            Authorization: `Token ${authToken.value}`,
          }
        : {}
    })

    // Actions
    const resetState = () => {
      authToken.value = defaultState.authToken
      user.value = defaultState.user
      returnRoute.value = defaultState.returnRoute
      errors.value = defaultState.errors
    }

    // Export
    return {
      // State
      authToken,
      user,
      returnRoute,
      isLoading,
      errors,
      // Computed
      isAuthenticated,
      userId,
      authHeaders,
      // Actions
      resetState,
    }
  },
  {
    persist: {
      storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
    },
  }
)
