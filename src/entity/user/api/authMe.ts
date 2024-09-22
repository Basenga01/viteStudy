import { createAsyncThunk } from '@reduxjs/toolkit'
import { SignInResponse } from '@/entity/user/types'
import { apiInstance } from '@/shered'
import { setAuthHeaders } from '@/shered/api/axiosinsteanse.ts'

export const authMe = createAsyncThunk<SignInResponse, void, {}>('users/authMe', async () => {
  setAuthHeaders()
  const response = await apiInstance.get<SignInResponse>('/users/me')
  return response.data
})