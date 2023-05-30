export interface User {
  /**
   * Id
   * @format uuid
   */
  id?: string
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   */
  username?: string
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string
  /**
   * Email
   * @format email
   *  */
  email?: string
}

export interface CreateUserApiRequest {
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   */
  username?: string
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string
  /**
   * Password
   * @minLength 1
   *  */
  password: string
  /**
   * Email
   * @format email
   *  */
  email?: string
}

export interface CreateUserApiResponse {
  /**
   * Id
   * @format uuid
   */
  id?: string
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   */
  username?: string
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string
  /**
   * Password
   * @minLength 1
   *  */
  password: string
  /**
   * Email
   * @format email
   *  */
  email?: string
  /**
   * Token
   * */
  auth_token: string
}

