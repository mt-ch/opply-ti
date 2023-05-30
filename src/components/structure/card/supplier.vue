<template>
  <a
    :href="`/supplier/${supplier.id}`"
    class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
  >
    <div class="flex justify-between w-full items-center gap-4 focus:outline-none">
      <div>
        <p class="text-sm font-medium text-gray-900 line-clamp-2">{{ supplier.name }}</p>
        <p class="text-sm text-gray-500 line-clamp-2">{{ supplier.description }}</p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { Supplier } from '@/types/api/supplier'

const props = defineProps<{
  supplier: Supplier
}>()
</script>
