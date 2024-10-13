export interface TodolistResponse {
  id: string
  title: string
  description: string
  created_at: string
  user_id: string
}

export interface TodolistDTO {
  id: string
  title: string
  description: string
  createdAt: string
  userId: string
}

export interface TdlRequest{
  title: string
  description: string
}

export interface DeleteTdlParams{
  todolistId: string
}