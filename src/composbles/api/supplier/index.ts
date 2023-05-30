import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import repositories from '@/api'
import { useSupplierStore } from '@/stores/supplier'
import { useAuthStore } from '@/stores/auth'
import { useApiAuth } from '../auth'

export const useApiSupplier = () => {
  const { suppliersApi } = repositories
  const { authHeaders, authToken } = storeToRefs(useAuthStore())
  const { suppliersData, supplierData, isGetLoading } = storeToRefs(useSupplierStore())
  const { logout } = useApiAuth()

  /**
   * ---------------------------------------------------------------------------
   *  Get all suppliers
   * ---------------------------------------------------------------------------
   */

  const getSuppliers = async () => {
    try {
      isGetLoading.value = true
      if (!authToken.value) {
        logout()
        return
      }
      const response = await suppliersApi.getSuppliers(authHeaders.value)
      suppliersData.value = response
    } catch (error) {
    } finally {
      isGetLoading.value = false
    }
  }

  /**
   * ---------------------------------------------------------------------------
   * Get supplier by id
   * ---------------------------------------------------------------------------
   */

  const getSupplier = async () => {
    try {
      isGetLoading.value = true
      if (!authToken.value) {
        logout()
        return
      }
      const router = useRoute()
      const response = await suppliersApi.getSupplier(parseInt(router.params.id as string), authHeaders.value)
      supplierData.value = response
    } catch (error) {
    } finally {
      isGetLoading.value = false
    }
  }

  return {
    getSuppliers,
    getSupplier,
  }
}
