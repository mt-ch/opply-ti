import { ApiClient } from '@/api/clients/base-axios'
import type { ApiGetQuotesResponse } from '@/types/api/quote'

export class quotesRepository {
  private apiClient: ApiClient

  constructor() {
    const baseURL = import.meta.env.VITE_API_URL
    this.apiClient = new ApiClient(`${baseURL}/api/v1`)
  }

  async getQuotes(headers?: Record<string, string>): Promise<ApiGetQuotesResponse> {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    return this.apiClient.get("/quotes/", page ? { page } : undefined, headers)
  }
}
