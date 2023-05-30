import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class ApiClient {
  private client: AxiosInstance

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    })
  }

  async get<T>(url: string, params?: Record<string, string>, headers?: Record<string, string>): Promise<T> {
    const config: AxiosRequestConfig = {
      params,
      headers,
    }
    const response: AxiosResponse<T> = await this.client.get(url, config)
    return response.data
  }

  async post<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    const config: AxiosRequestConfig = {
      headers,
    }
    const response: AxiosResponse<T> = await this.client.post(url, data, config)
    return response.data
  }

  async put<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    const config: AxiosRequestConfig = {
      headers,
    }
    const response: AxiosResponse<T> = await this.client.put(url, data, config)
    return response.data
  }

  async delete(url: string, headers?: Record<string, string>): Promise<void> {
    const config: AxiosRequestConfig = {
      headers,
    }
    await this.client.delete(url, config)
  }
}
