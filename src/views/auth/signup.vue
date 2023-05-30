<template>
  <LayoutAuth title="Create your account">
    <form class="space-y-6" action="submit" method="POST" @submit.prevent="submit" novalidate="true">
      <div class="space-y-4">
        <div>
          <label for="first-name" class="block text-left text-sm font-medium leading-6 text-gray-900">First Name</label>
          <div
            :class="[
              'relative mt-2 rounded-md',
              isAnError(v$.first_name.$error, errors?.first_name?.[0]) ? ' shadow-sm' : null,
            ]"
          >
            <input
              v-model="model.first_name"
              id="first-name"
              name="first-name"
              type="text"
              required
              :class="[
                'block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus-visible:outline-none',
                isAnError(v$.first_name.$error, errors?.first_name?.[0])
                  ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                  : 'text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-600',
              ]"
            />
          </div>
          <p
            v-if="isAnError(v$.first_name.$error, errors?.first_name?.[0])"
            class="mt-2 text-sm text-red-600"
            id="first-name-error"
          >
            {{ errorMessage(v$.first_name.$errors[0], errors?.first_name?.[0]) }}
          </p>
        </div>
        <div>
          <label for="last-name" class="block text-left text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <div
            :class="[
              'relative mt-2 rounded-md',
              isAnError(v$.last_name.$error, errors?.last_name?.[0]) ? ' shadow-sm' : null,
            ]"
          >
            <input
              v-model="model.last_name"
              id="last-name"
              name="last-name"
              type="text"
              required
              :class="[
                'block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus-visible:outline-none',
                isAnError(v$.last_name.$error, errors?.last_name?.[0])
                  ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                  : 'text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-600',
              ]"
            />
          </div>
          <p
            v-if="isAnError(v$.last_name.$error, errors?.last_name?.[0])"
            class="mt-2 text-sm text-red-600"
            id="last-name-error"
          >
            {{ errorMessage(v$.last_name.$errors[0], errors?.last_name?.[0]) }}
          </p>
        </div>
        <div>
          <label for="email" class="block text-left text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div
            :class="['relative mt-2 rounded-md', isAnError(v$.email.$error, errors?.email?.[0]) ? ' shadow-sm' : null]"
          >
            <input
              v-model="model.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              :class="[
                'block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus-visible:outline-none',
                isAnError(v$.email.$error, errors?.email?.[0])
                  ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                  : 'text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-600',
              ]"
            />
          </div>
          <p v-if="isAnError(v$.email.$error, errors?.email?.[0])" class="mt-2 text-sm text-red-600" id="email-error">
            {{ errorMessage(v$.email.$errors[0], errors?.email?.[0]) }}
          </p>
        </div>
        <div>
          <label for="username" class="block text-left text-sm font-medium leading-6 text-gray-900">Username</label>
          <div
            :class="[
              'relative mt-2 rounded-md',
              isAnError(v$.username.$error, errors?.username?.[0]) ? ' shadow-sm' : null,
            ]"
          >
            <input
              v-model="model.username"
              id="username"
              name="username"
              type="text"
              required
              :class="[
                'block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus-visible:outline-none',
                isAnError(v$.username.$error, errors?.username?.[0])
                  ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                  : 'text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-600',
              ]"
            />
          </div>
          <p
            v-if="isAnError(v$.username.$error, errors?.username?.[0])"
            class="mt-2 text-sm text-red-600"
            id="username-error"
          >
            {{ errorMessage(v$.username.$errors[0], errors?.username?.[0]) }}
          </p>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-left text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div
            :class="[
              'relative mt-2 rounded-md',
              isAnError(v$.password.$error, errors?.password?.[0]) ? ' shadow-sm' : null,
            ]"
          >
            <input
              v-model="model.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              :class="[
                'block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 focus-visible:outline-none',
                isAnError(v$.password.$error, errors?.password?.[0])
                  ? 'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
                  : 'text-gray-900 placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-600',
              ]"
            />
          </div>
          <p
            v-if="isAnError(v$.password.$error, errors?.password?.[0])"
            class="mt-2 text-sm text-red-600"
            id="password-error"
          >
            {{ errorMessage(v$.password.$errors[0], errors?.password?.[0]) }}
          </p>
        </div>
      </div>
      <div v-if="errors?.non_field_errors" class="flex flex-col gap-2">
        <p v-for="(error, index) in errors?.non_field_errors" :key="index" class="text-sm text-red-600">{{ error }}</p>
      </div>
      <div>
        <button
          type="submit"
          :class="[
            'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
            v$.$error && !isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-600',
            isLoading ? 'cursor-progress' : 'hover:bg-indigo-600',
          ]"
          :disabled="v$.$error || isLoading"
        >
          <Loader v-if="isLoading" class="text-white w-5 h-5" />
          <template v-else>Sign up</template>
        </button>
      </div>
    </form>
    <p class="mt-10 text-center text-sm text-gray-500">
      Already have an account?
      {{ ' ' }}
      <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in here</a>
    </p>
  </LayoutAuth>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { CreateUserApiRequest } from '@/types/api/user'

import { useAuthStore } from '@/stores/auth'

import LayoutAuth from '@/layouts/auth.vue'
import Loader from '@/components/application/loader.vue'

import { useApiUser } from '@/composbles/api/user'
import { useClientSideError } from '@/composbles/utilities/useClientSideError'
import { useSignup } from '@/composbles/pages/useSignup'
import { onMounted } from 'vue'

const { resetState } = useAuthStore()
const { isLoading, errors } = storeToRefs(useAuthStore())
const { createUser } = useApiUser()
const { isAnError, errorMessage } = useClientSideError()
const { model, v$ } = useSignup()

const submit = async (e: Event) => {
  e.preventDefault()
  errors.value = null
  const valid = await v$.value.$validate()
  if (!valid) {
    return
  }

  const { first_name, last_name, username, password, email } = model

  const request: CreateUserApiRequest = {
    first_name: first_name,
    last_name: last_name,
    username: username,
    password: password,
    email: email,
  }

  await createUser(request)
}

onMounted(() => {
  resetState()
})
</script>
