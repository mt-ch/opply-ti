import { storeToRefs } from 'pinia'
import repositories from '@/api'
import { CreateUserApiRequest } from '@/types/api/user'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export const useApiUser = () => {
  const { userApi } = repositories
  const { authToken, user, isLoading, errors } = storeToRefs(useAuthStore())
  const router = useRouter()

  /**
   * ---------------------------------------------------------------------------
   * Create user
   * ---------------------------------------------------------------------------
   */

  const createUser = async (payload?: CreateUserApiRequest) => {
    try {
      isLoading.value = true
      const { id, first_name, last_name, username, email, auth_token } = await userApi.createUser(
        payload as CreateUserApiRequest
      )
      authToken.value = auth_token
      user.value = { id, first_name, last_name, username, email }
      router.push('/')
    } catch (error: any) {
      const response = error.response.data
      errors.value = response
    } finally {
      isLoading.value = false
    }
  }
  return {
    createUser,
  }
}
