import { createSlice } from '@reduxjs/toolkit'
import { getMyTdl, TodolistDTO } from '@/entity'
import { addTdl } from '@/entity/todolist/api/addTdl.ts'
import { changeTdl } from "@/entity/todolist/api/changeTdl.ts";

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
        state.todoLists = action.payload.sort((a, b)=>
          new Date(a.createdAt).getTime()  -  new Date(b.createdAt).getTime())
        state.isLoading = false
      })
      .addCase(getMyTdl.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(addTdl.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addTdl.fulfilled, (state, action) => {
        state.todoLists.unshift(action.payload)
        state.isLoading = false
      })
      .addCase(addTdl.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(changeTdl.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changeTdl.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(changeTdl.rejected, (state) => {
        state.isLoading = false
      })
  },
})
