import { CreateUserApiRequest } from '@/types/api/user'
import { helpers, minLength, required } from '@vuelidate/validators'

export const rules = (model: CreateUserApiRequest) => {
  return {
    username: {
      required: helpers.withMessage('Username is required', required),
      minLength: helpers.withMessage('Must be at least 1 character', minLength(1)),
    },
    password: {
      required: helpers.withMessage('Password is required', required),
      minLength: helpers.withMessage('Must be at least 1 character', minLength(1)),
    },
  }
}
