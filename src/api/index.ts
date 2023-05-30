import { userRepository } from '@/api/repositories/user'
import { authRepository } from '@/api/repositories/auth'
import { suppliersRepository } from '@/api/repositories/suppliers'
import { quotesRepository } from '@/api/repositories/quotes'

export const userApi = new userRepository()
export const authApi = new authRepository()
export const suppliersApi = new suppliersRepository()
export const quotesApi = new quotesRepository()

const repositories = {
  userApi,
  authApi,
  suppliersApi,
  quotesApi,
}

export default repositories
