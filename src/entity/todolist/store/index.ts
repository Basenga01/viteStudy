import { createSlice } from '@reduxjs/toolkit'
import { getMyTdl, TodolistDTO } from '@/entity'

interface InitialStateType {
  todoLists: TodolistDTO[]
  isLoading: boolean
}

const initialState: InitialStateType = {
  todoLists: [],
  isLoading: false,
}
export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyTdl.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMyTdl.fulfilled, (state, action) => {
        state.todoLists = action.payload
        state.isLoading = false
      })
      .addCase(getMyTdl.rejected, (state) => {
        state.isLoading = false
      })
  },
})