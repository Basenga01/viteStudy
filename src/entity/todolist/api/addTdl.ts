import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/shered'
import { TdlRequest, TodolistDTO, TodolistResponse } from "@/entity";


const normData = (data: TodolistResponse): TodolistDTO => {
  const { created_at, user_id, ...rest } = data
  return { createdAt: created_at, userId: user_id, ...rest }
}

interface CommonFunction{
  successesCallback?: ()=> void
}

export const addTdl = createAsyncThunk<TodolistDTO, TdlRequest & CommonFunction>(
  'todolist/addTdl',
  async ({successesCallback, ...data}, thunkAPI) => {
    try {
      const response = await apiInstance.post<TodolistResponse>('todolist', data)
      successesCallback?.()
      return normData(response.data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
