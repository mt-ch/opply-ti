<template>
  <LayoutDefault :title="supplierData ? supplierData?.name : '404'">
    <template v-if="!isGetLoading">
      <template v-if="supplierData">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-900">Description</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ supplierData?.description }}</dd>
          </div>

          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-900">Lorem ipsum dolor sit amet</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gloriosa ostentatio in constituendo summo bono.
              An hoc usque quaque, aliter in vita? Iam in altera philosophiae parte.
            </dd>
          </div>

          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-900">Lorem ipsum dolor sit amet</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gloriosa ostentatio in constituendo summo bono.
              An hoc usque quaque, aliter in vita? Iam in altera philosophiae parte.
            </dd>
          </div>
        </dl>
        <Pagination />
      </template>
      <NoResults v-else href="/" />
    </template>
    <div v-else class="h-[60vh] flex items-center justify-center">
      <Loader class="h-16 w-16 text-indigo-600" />
    </div>
  </LayoutDefault>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSupplierStore } from '@/stores/supplier'
import { useApiSupplier } from '@/composbles/api/supplier'

import LayoutDefault from '@/layouts/default.vue'
import Loader from '@/components/application/loader.vue'
import NoResults from '@/components/structure/no-results.vue'

const { getSupplier } = useApiSupplier()
const { supplierData, isGetLoading } = storeToRefs(useSupplierStore())

onMounted(() => {
  getSupplier()
})
</script>
