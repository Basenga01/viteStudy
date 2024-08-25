import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { TaskType, TodolistType } from '@/types'
import { initialTask, initialTodolists } from '@/app/provaider/todolistProvaider/data.ts'

interface PropsContext {
  setTask: Dispatch<SetStateAction<TaskType>>
  todoLists: TodolistType[]
  tasks: TaskType
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext)

interface PropsType {
  children: ReactNode
}

export const TodolistProvider = ({ children }: PropsType) => {
  const [todoLists, setTodolists] = useState<TodolistType[]>(initialTodolists)
  const [tasks, setTask] = useState<TaskType>(initialTask)
  const getData = (): PropsContext => {
    return { todoLists, setTodolists, tasks, setTask }
  }

  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>
}