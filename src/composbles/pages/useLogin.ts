import useVuelidate from '@vuelidate/core'
import { reactive } from 'vue'
import { rules } from '@/composbles/rules/login'
import { AuthApiRequest } from '@/types/api/auth'

export const useLogin = () => {
  const model = reactive<AuthApiRequest>({
    username: '',
    password: '',
  })

  const v$ = useVuelidate(rules(model), model)

  // Export
  return {
    model,
    v$,
  }
}
