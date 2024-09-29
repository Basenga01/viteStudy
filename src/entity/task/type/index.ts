export interface TaskResponse {
  id: string
  is_completed: boolean
  created_at: string
  description: string
  todolist_id: string
  title: string
  due_date: string
}

export interface TaskDTO {
  id: string
  isCompleted: boolean
  createdAt: string
  description: string
  todolistId: string
  title: string
  dueDate: string
}