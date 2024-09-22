export interface SignInRequest {
  username: string
  password: string
}

export interface SignInResponse {
  id: string
  email: string
  last_name: string
  first_name: string
  username: string
  roles: string[]
  access_token: string
}