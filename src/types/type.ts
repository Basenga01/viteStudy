export interface Task {
  id: string
  task: string
  isDone: boolean
  todolistId: string
  createdAt: string
  description: string
  dueDate: string
}

export interface TaskResponse {
  id: string
  is_completed: true
  created_at: string
  description: string
  todolist_id: string
  title: string
  due_date: string
}

export interface TodolistType {
  id: string
  title: string
  description: string
  created_at: string
  user_id: string
}

export interface TaskType {
  [key: string]: Task[]
}
