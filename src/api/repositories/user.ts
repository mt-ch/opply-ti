import { ApiClient } from '@/api/clients/base-axios'
import type { CreateUserApiRequest, CreateUserApiResponse, User } from '@/types/api/user'

export class userRepository {
  private apiClient: ApiClient

  constructor() {
    const baseURL = import.meta.env.VITE_API_URL
    this.apiClient = new ApiClient(`${baseURL}/api/v1`)
  }

  async getUser(id: number): Promise<User> {
    return this.apiClient.get(`/users/${id}`)
  }

  async createUser(user: CreateUserApiRequest): Promise<CreateUserApiResponse> {
    return this.apiClient.post<CreateUserApiResponse>('/users/', user)
  }
}
