import useVuelidate from '@vuelidate/core'
import { reactive } from 'vue'
import { rules } from '@/composbles/rules/signup'
import { CreateUserApiRequest } from '@/types/api/user'

export const useSignup = () => {
  const model = reactive<CreateUserApiRequest>({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
  })

  const v$ = useVuelidate(rules(model), model as any)

  // Export
  return {
    model,
    v$,
  }
}
