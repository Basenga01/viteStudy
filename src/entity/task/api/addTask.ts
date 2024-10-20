import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/shered'
import { TaskDTO, TaskResponse } from '@/entity/task'

interface AddTaskType {
  value: string
  todolistid: string
  successCallback: () => void
  errorCallback: () => void
}

export const addTask = createAsyncThunk<TaskDTO, AddTaskType>('task/addTask', async (params) => {
  const response = await apiInstance.post<TaskResponse>('/task', {
    description: '',
    todolist_id: params.todolistid,
    title: params.value,
    due_date: '2024-10-13T07:10:44.641Z',
  })
  params.successCallback()
  const {
    is_completed: isCompleted,
    todolist_id: todolistId,
    created_at: createdAt,
    due_date: dueDate,
    ...rest
  } = response.data
  return {
    isCompleted,
    createdAt,
    todolistId,
    dueDate,
    ...rest
  }
})
