import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { TaskType, TodolistType } from '@/types'
import { initialTask, initialTodolists } from '@/app/provaider/todolistProvaider/data.ts'

interface PropsContext {
  setTaskObj: Dispatch<SetStateAction<TaskType>>
  todoLists: TodolistType[]
  tasksObj: TaskType
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
}

interface PropsType {
  children: ReactNode
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext)

export const TodolistProvider = ({ children }: PropsType) => {
  const [todoLists, setTodolists] = useState<TodolistType[]>(initialTodolists)
  const [tasksObj, setTaskObj] = useState<TaskType>(initialTask)
  const getData = (): PropsContext => {
    return { todoLists, setTodolists, tasksObj, setTaskObj }
  }

  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>
}
