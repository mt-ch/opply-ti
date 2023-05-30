<template>
  <div>
    <Nav />
    <div class="min-h-full">
      <div class="bg-indigo-600 pb-32">
        <header class="py-10">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold tracking-tight text-white">{{ title }}</h1>
          </div>
        </header>
      </div>

      <main class="-mt-32">
        <div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6 flex flex-col gap-4">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Nav from '@/components/application/nav.vue'
import Footer from '@/components/application/footer.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
