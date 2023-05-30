<template>
  <main>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://img.logoipsum.com/290.svg"
          alt="Your Company"
        />
        <h2 class="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{{ title }}</h2>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <slot />
      </div>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from '@/components/application/footer.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
