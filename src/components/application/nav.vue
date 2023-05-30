<template>
  <nav class="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div
        class="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25"
      >
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <img class="block h-10 w-10" src="https://img.logoipsum.com/290.svg" alt="Logo" />
          </div>
          <div class="ml-4 lg:ml-10 block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.href === router.currentRoute.value.path
                    ? 'bg-indigo-700 text-white'
                    : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                  'rounded-md py-2 px-3 text-sm font-medium',
                ]"
                :aria-current="item.href === router.currentRoute.value.path ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>

        <div class="ml-4 block">
          <div class="flex items-center">
            <!-- Log out -->
            <button
              type="button"
              @click.prevent="logout"
              class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useApiAuth } from '@/composbles/api/auth'
const router = useRouter()
const { logout } = useApiAuth()
const navigation = [
  { name: 'Suppliers', href: '/' },
  { name: 'Quotes', href: '/quotes' },
]
</script>
