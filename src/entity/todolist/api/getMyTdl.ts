import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "@/shered";
import { TodolistDTO, TodolistResponse } from "@/entity/todolist";

const normalizedTdl = (todoLists: TodolistResponse[]): TodolistDTO[]=> {
  return todoLists.map((tdl) =>{
    const {user_id, created_at, ...rest} = tdl
    return {...rest, userId: user_id, createdAt: created_at}
  })
}
export const getMyTdl = createAsyncThunk<TodolistDTO[], void>('todolist/getMyTdl', async ()=> {
  const response = await apiInstance.get<TodolistResponse[]>('/todolist')
  return normalizedTdl(response.data)
})
