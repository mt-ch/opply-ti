import { storeToRefs } from 'pinia'
import repositories from '@/api'
import { useAuthStore } from '@/stores/auth'
import { AuthApiRequest } from '@/types/api/auth'
import { useRouter } from 'vue-router'

export const useApiAuth = () => {
  const { authApi } = repositories
  const { resetState } = useAuthStore()
  const { authToken, isLoading, errors } = storeToRefs(useAuthStore())
  const router = useRouter()

  // Methods

  /**
   * ---------------------------------------------------------------------------
   *  Login
   * ---------------------------------------------------------------------------
   */
  const login = async (payload: AuthApiRequest) => {
    try {
      isLoading.value = true
      errors.value = null
      const { token } = await authApi.authUser(payload)
      authToken.value = token as string
      router.push('/')
    } catch (error: any) {
      const response = error.response.data
      errors.value = response
    } finally {
      isLoading.value = false
    }
  }

  /**
   * ---------------------------------------------------------------------------
   *  Logout
   * ---------------------------------------------------------------------------
   */
  const logout = async () => {
    resetState()
    const logoutUrl = '/login'
    return router.push(logoutUrl)
  }

  return {
    login,
    logout,
  }
}
