import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "@/shered";
import { TaskDTO, TaskUpdateRequest } from "@/entity/task";
import { TaskResponse } from "@/types";

interface CommonData{
  taskId: string
  succesesCallback?: () => void
}

export const updateTask = createAsyncThunk<TaskDTO, TaskUpdateRequest&CommonData> ('task/updateTask', async (params)=>{
  const { taskId,succesesCallback,...data} = params
  const {title,isCompleted: is_completed} = data
  const response = await apiInstance.patch<TaskResponse>(`/task/${taskId}`, {is_completed, title})
  const {
    is_completed: isCompleted,
    todolist_id: todolistId,
    created_at: createdAt,
    due_date: dueDate,
    ...rest
  } = response.data
  succesesCallback?.()
  return {
    isCompleted,
    createdAt,
    todolistId,
    dueDate,
    ...rest
  }
})