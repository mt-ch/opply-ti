import { ApiClient } from '../clients/base-axios'
import type { ApiGetSupplierResponse, Supplier } from '@/types/api/supplier'

export class suppliersRepository {
  private apiClient: ApiClient

  constructor() {
    const baseURL = import.meta.env.VITE_API_URL
    this.apiClient = new ApiClient(`${baseURL}/api/v1`)
  }

  async getSuppliers(headers?: Record<string, string>): Promise<ApiGetSupplierResponse> {
    const params = new URLSearchParams(window.location.search)
    const page = params.get('page')
    return this.apiClient.get<ApiGetSupplierResponse>('/suppliers/', page ? { page } : undefined, headers)
  }

  async getSupplier(id: number, headers?: Record<string, string>): Promise<Supplier> {
    return this.apiClient.get<Supplier>(`/suppliers/${id}/`, undefined, headers)
  }
}
