import { createSlice } from '@reduxjs/toolkit'
import { signIn } from '@/entity/user/api/signIn.ts'
import { authMe } from '@/entity/user/api/authMe.ts'
import { ACCESS_TOKEN } from '@/shered'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Borya',
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    logOut(state) {
      localStorage.removeItem(ACCESS_TOKEN)
      state.isAuthenticated = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, () => {})
      .addCase(authMe.fulfilled, (state) => {
        state.isAuthenticated = true
        state.isLoading = false
      })
      .addCase(authMe.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export { userSlice }
export const { logOut } = userSlice.actions
