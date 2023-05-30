<template>
  <LayoutDefault title="Suppliers">
    <template v-if="!isGetLoading">
      <template v-if="suppliersData">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SupplierCard v-for="(supplier, index) in suppliersData?.results" :key="index" :supplier="supplier" />
        </div>
        <Pagination :total-results="suppliersData?.count" />
      </template>
      <NoResults v-else href="/" />
    </template>
    <div v-else class="h-[60vh] flex items-center justify-center">
      <Loader class="h-16 w-16 text-indigo-600" />
    </div>
  </LayoutDefault>
</template>
<script setup lang="ts">
import { onMounted, toRef, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useSupplierStore } from '@/stores/supplier'
import LayoutDefault from '@/layouts/default.vue'

import { useApiSupplier } from '@/composbles/api/supplier'

import Loader from '@/components/application/loader.vue'
import Pagination from '@/components/application/pagination.vue'
import NoResults from '@/components/structure/no-results.vue'
import SupplierCard from '@/components/structure/card/supplier.vue'

const { getSuppliers } = useApiSupplier()
const { suppliersData, isGetLoading } = storeToRefs(useSupplierStore())
const route = useRoute()
const routeQuery = toRef(route, 'query')

watch(routeQuery, () => {
  getSuppliers()
})

onMounted(() => {
  getSuppliers()
})
</script>
