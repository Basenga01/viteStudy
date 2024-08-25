

export interface Task {
  id: string
  task: string
  isDone: boolean
  todolistid: string
}
export interface TodolistType {
  id: string
  title: string
}

export interface TaskType {
  [key: string]: Task[]
}