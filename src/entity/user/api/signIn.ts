import { createAsyncThunk } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, apiInstance } from '@/shered'
import { SignInRequest, SignInResponse } from '@/entity/user/types'
import { authMe } from '@/entity/user/api/authMe.ts'

export const signIn = createAsyncThunk<SignInResponse, SignInRequest, {}>(
  'users/signIn',
  async (params, { dispatch }) => {
    const response = await apiInstance.post<SignInResponse>('/users/login', params)
    localStorage.setItem(ACCESS_TOKEN, response.data.access_token)
    dispatch(authMe())
    return response.data
  }
)
