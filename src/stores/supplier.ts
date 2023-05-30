import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ApiGetSupplierResponse, Supplier } from '../types/api/supplier'

/**
 * =============================================================================
 *  useSupplierStore
 * =============================================================================
 */

export const useSupplierStore = defineStore('supplierStore', () => {
  /**
   * ---------------------------------------------------------------------------
   *  State
   * ---------------------------------------------------------------------------
   */

  const suppliersData = ref<ApiGetSupplierResponse>()
  const supplierData = ref<Supplier>()
  const model = ref<any>()
  const isGetLoading = ref<boolean>(true)

  /**
   * ---------------------------------------------------------------------------
   *  Export
   * ---------------------------------------------------------------------------
   */

  return {
    suppliersData,
    supplierData,
    model,
    isGetLoading,
  }
})
