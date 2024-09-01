import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Task, TaskType, TodolistType } from "@/types";
import { initialTask, initialTodolists } from '@/app/provaider/todolistProvaider/data.ts'
import { v4 as uuidv4 } from "uuid";

interface PropsContext {
  setTaskObj: Dispatch<SetStateAction<TaskType>>
  todoLists: TodolistType[]
  tasksObj: TaskType
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
  addTodolist: (titleTdl:string, successCallback: ()=>void)=> void
  onSavetitleTdl: (todolistid:string, value: string, onSuccsesCallback: () => void)=> void
  onSaveTitleTask: (todolistid: string, taskId: string, value: string, onSuccsesCallback: () => void)=> void
  deleteTask: (taskId: string, todolistId: string)=>void
  isComplitedTask: (checked: boolean, taskId: string, todolistid: string) => void
  onDeleteTdl: (todolistid: string, callback:()=>void)=>void
  addTask : (value: string, todolistid: string, successCallback: ()=>void, errorCallback: ()=>void)=>void
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
  function onSaveTitleTask(todolistid:string, taskId: string, value: string, onSuccsesCallback: () => void) {
    setTaskObj((prevState) => {
      const tasks = prevState[todolistid]
      const newTasks = tasks.map((item) => (item.id === taskId ? { ...item, task: value } : item))
      return { ...prevState, ...{ [todolistid]: newTasks } }
    })
    onSuccsesCallback()
  }

  function onSavetitleTdl(todolistid:string, value: string, onSuccsesCallback: () => void) {
    setTodolists((prevState) => {
      const newArr = prevState.map((element) =>
        element.id === todolistid ? { ...element, title: value } : element
      )

      return newArr
    })
    onSuccsesCallback()
  }
  function deleteTask(taskId: string, todolistId: string) {
    setTaskObj((prevState) => {
      const tagretTodolist = prevState[todolistId]
      const filtredTask = tagretTodolist.filter((el) => el.id !== taskId)
      return { ...prevState, ...{ [todolistId]: filtredTask } }
    })
  }
  function isComplitedTask(checked: boolean, taskId: string, todolistid: string) {
    setTaskObj((prevState) => {
      const tasks = prevState[todolistid]
      const resultTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: checked } : task
      )
      const resObj = {
        [todolistid]: resultTasks,
      }
      return { ...prevState, ...resObj }
    })
  }
  const onDeleteTdl = (todolistid: string, callback:()=>void) => {
    setTaskObj((prevState) => {
      const newObjTask: TaskType = { ...prevState }
      delete newObjTask[todolistid]
      return newObjTask
    })
    setTodolists((prevState) => {
      return prevState.filter((tdl) => tdl.id !== todolistid)
    })
    callback()
  }
  const addTask = (value: string, todolistid: string, successCallback: ()=>void, errorCallback: ()=>void) => {
    if (value) {
      setTaskObj((prevState) => {
        const newTask: Task = { id: uuidv4(), task: value, isDone: false, todolistid }
        const tasks = prevState[todolistid]
        const newtasks = [newTask, ...tasks]
        return { ...prevState, ...{ [todolistid]: newtasks } }
      })
      successCallback()
    } else {
      errorCallback()
    }
  }
  const getData = (): PropsContext => {
    return { todoLists, setTodolists, tasksObj, setTaskObj, addTodolist, onSaveTitleTask, onSavetitleTdl, deleteTask, isComplitedTask, onDeleteTdl, addTask }
  }

  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>
}
