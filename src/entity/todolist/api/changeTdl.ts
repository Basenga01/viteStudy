import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/shered'
import { TdlRequest, TodolistDTO, TodolistResponse } from '@/entity'

const normData = (data: TodolistResponse): TodolistDTO => {
  const { created_at, user_id, ...rest } = data
  return { createdAt: created_at, userId: user_id, ...rest }
}

interface CommonFunction {
  successesCallback?: () => void
  todolistId: string
}

export const changeTdl = createAsyncThunk<TodolistDTO, Partial<TdlRequest> & CommonFunction>(
  'todolist/changeTdl',
  async ({ successesCallback, todolistId , ...data }, thunkAPI) => {
    try {
      const response = await apiInstance.patch<TodolistResponse>(`todolist/${todolistId}`, data)
      successesCallback?.()
      return normData(response.data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)
