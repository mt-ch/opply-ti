import { ApiClient } from '@/api/clients/base-axios'
import type { AuthApiRequest, AuthApiResponse } from '@/types/api/auth'

export class authRepository {
  private apiClient: ApiClient
  constructor() {
    const baseURL = import.meta.env.VITE_API_URL
    this.apiClient = new ApiClient(`${baseURL}/api-token-auth/`)
  }

  async authUser(payload: AuthApiRequest): Promise<AuthApiResponse> {
    return this.apiClient.post<AuthApiResponse>('/', payload)
  }
}
