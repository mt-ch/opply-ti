export interface AuthApiRequest {
  /**
   * Username
   * @minLength 1
   */
  username: string
  /**
   * Password
   * @minLength 1
   */
  password: string
}

export interface AuthApiResponse {
  /**
   * Username
   * @minLength 1
   */
  username: string
  /**
   * Password
   * @minLength 1
   */
  password: string
  /**
   * Token
   * @minLength 1
   */
  token?: string
}

export interface AuthApiError {
  /**
   * Username
   */
  username?: string[]
  /**
   * First name
   */
  first_name?: string[]
  /**
   * Last name
   */
  last_name?: string[]
  /**
   * Password
   *  */
  password?: string[]
  /**
   * Email
   *  */
  email?: string[]
  /**
   * Non field errors
   *  */
  non_field_errors?: string[]
}
