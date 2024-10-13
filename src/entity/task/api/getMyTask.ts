import { TaskDTO, TaskResponse } from '@/entity/task'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '@/shered'

export const normalizedTask = (tasks: TaskResponse[]): TaskDTO[] => {
  return tasks.map((task) => {
    const { due_date, is_completed, created_at, todolist_id, ...rest } = task
    return {
      ...rest,
      dueDate: due_date,
      isCompleted: is_completed,
      createdAt: created_at,
      todolistId: todolist_id,
    }
  })
}

export const getMyTask = createAsyncThunk<TaskDTO[], void>('task/getMyTask', async () => {
  const response = await apiInstance.get<TaskResponse[]>('/task')
  return normalizedTask(response.data)
})