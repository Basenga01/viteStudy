import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { TaskType, TodolistType } from '@/types'
import { initialTask, initialTodolists } from '@/app/provaider/todolistProvaider/data.ts'
import { v4 as uuidv4 } from "uuid";

interface PropsContext {
  setTaskObj: Dispatch<SetStateAction<TaskType>>
  todoLists: TodolistType[]
  tasksObj: TaskType
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
  addTodolist: (titleTdl:string, successCallback: ()=>void)=> void
}

interface PropsType {
  children: ReactNode
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext)

export const TodolistProvider = ({ children }: PropsType) => {

  const [todoLists, setTodolists] = useState<TodolistType[]>(initialTodolists)
  const [tasksObj, setTaskObj] = useState<TaskType>(initialTask)

  const addTodolist = (titleTdl:string, successCallback: ()=>void) => {
    const todolistId = uuidv4()
    const newTodolist: TodolistType = {
      id: todolistId,
      title: titleTdl,
    }
    const newTask = {
      [todolistId]: [],
    }
    setTodolists((prevState) => [newTodolist, ...prevState])
    setTaskObj((prevState) => {
      return { ...prevState, ...newTask }
    })
    successCallback()
  }
  const getData = (): PropsContext => {
    return { todoLists, setTodolists, tasksObj, setTaskObj, addTodolist }
  }

  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>
}
