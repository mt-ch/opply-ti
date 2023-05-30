import { CreateUserApiRequest } from '@/types/api/user'
import { email, helpers, maxLength, minLength, required } from '@vuelidate/validators'

export const rules = (model: CreateUserApiRequest) => {
  return {
    first_name: {
      required: helpers.withMessage('First name is required', required),
      maxLength: helpers.withMessage('Must be at most 150 characters', maxLength(150)),
    },
    last_name: {
      required: helpers.withMessage('Last name is required', required),
      maxLength: helpers.withMessage('Must be at most 150 characters', maxLength(150)),
    },
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Must be a valid email', email),
      maxLength: helpers.withMessage('Must be at most 254 characters', maxLength(254)),
    },
    username: {
      required: helpers.withMessage('Username is required', required),
      minLength: helpers.withMessage('Must be at least 1 character', minLength(1)),
      maxLength: helpers.withMessage('Must be at most 150 characters', maxLength(150)),
      validChars: helpers.withMessage('Must only contain letters, numbers, and underscores', () =>
        /^[\w.@+-]+$/.test(model.username as string)
      ),
    },
    password: {
      required: helpers.withMessage('Password is required', required),
      minLength: helpers.withMessage('Must be at least 1 character', minLength(1)),
      maxLength: helpers.withMessage('Must be at most 128 characters', maxLength(128)),
    },
  }
}
