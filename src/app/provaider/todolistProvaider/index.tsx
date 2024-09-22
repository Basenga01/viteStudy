import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { Task, TaskResponse, TaskType, TodolistType } from "@/types";
import { ACCESS_TOKEN, BASE_URL } from '@/shered'

interface PropsContext {
  setTaskObj: Dispatch<SetStateAction<TaskType>>
  todoLists: TodolistType[]
  tasksObj: TaskType
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
  addTodolist: (titleTdl: string, successCallback: () => void) => void
  onSavetitleTdl: (todolistid: string, value: string, onSuccsesCallback: () => void) => void
  onSaveTitleTask: (
    todolistid: string,
    taskId: string,
    value: string,
    onSuccsesCallback: () => void
  ) => void
  deleteTask: (taskId: string, todolistId: string) => void
  isComplitedTask: (checked: boolean, taskId: string, todolistid: string) => void
  onDeleteTdl: (todolistid: string, callback: () => void) => void
  addTask: (
    value: string,
    todolistid: string,
    successCallback: () => void,
    errorCallback: () => void
  ) => void
  getTdl: () => void
  getTask: () => void
}

interface PropsType {
  children: ReactNode
}

export const TodolistContext = createContext<PropsContext>({} as PropsContext)

export const TodolistProvider = ({ children }: PropsType) => {
  const [todoLists, setTodolists] = useState<TodolistType[]>([])
  const [tasksObj, setTaskObj] = useState<TaskType>({})

  function onSaveTitleTask(
    todolistid: string,
    taskId: string,
    value: string,
    onSuccsesCallback: () => void
  ) {
    setTaskObj((prevState) => {
      const tasks = prevState[todolistid]
      const newTasks = tasks.map((item) => (item.id === taskId ? { ...item, task: value } : item))
      return { ...prevState, ...{ [todolistid]: newTasks } }
    })
    onSuccsesCallback()
  }
  function onSavetitleTdl(todolistid: string, value: string, onSuccsesCallback: () => void) {
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

  const onDeleteTdl = (todolistid: string, callback: () => void) => {
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

  const getTdl = async () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN)
    if (access_token) {
      const result = await fetch(`${BASE_URL}/todolist`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
      })
      if (result.ok) {
        const data: TodolistType[] = await result.json()
        setTodolists(data)
      } else {
        console.error('error')
        localStorage.removeItem(ACCESS_TOKEN)
      }
    }
  }
  const getTask = async () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN)
    if (access_token) {
      const result = await fetch(`${BASE_URL}/task`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
      })
      if (result.ok) {
        const data: TaskResponse[] = await result.json()

        const convertTask = (tasks: TaskResponse[]): Task[] => {
          return tasks.map(
            (task): Task =>({
            id: task.id,
            task: task.title,
            isDone: task.is_completed,
            todolistId: task.todolist_id,
            createdAt: task.created_at,
            description: task.description,
            dueDate: task.due_date
          }))
        }

        const taskObj: TaskType ={}

         convertTask(data).forEach((el)=>{
           if (taskObj[el.todolistId]){
             taskObj[el.todolistId] = [...taskObj[el.todolistId], el]
           }else{taskObj[el.todolistId] = [el]}

        })
        console.log(taskObj)
        console.log(data, 'data')
        console.log('convertData' ,convertTask(data))
        setTaskObj(taskObj)
      } else {
        console.error('error')
      }
    }
  }
  const addTodolist = async (titleTdl: string, successCallback: () => void) => {
    const access_token = localStorage.getItem(ACCESS_TOKEN)
    if (access_token) {
      const result = await fetch(`${BASE_URL}/todolist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
        body: JSON.stringify({
          title: titleTdl,
          description: '',
        }),
      })
      if (result.ok) {
        getTdl()
        successCallback()
      } else {
        console.error('error')
      }
    }
  }
  const addTask = async (
    value: string,
    todolistid: string,
    successCallback: () => void,
    errorCallback: () => void
  ) => {
    const access_token = localStorage.getItem(ACCESS_TOKEN)
    if (access_token) {
      const result = await fetch(`${BASE_URL}/task`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
        body: JSON.stringify({
          description: '',
          todolist_id: todolistid,
          title: value,
        }),
      })
      if (result.ok) {
        getTask()
        successCallback()
      } else {
        console.error('error')
        errorCallback()
      }
    }
  }
  const getData = (): PropsContext => {
    return {
      todoLists,
      setTodolists,
      tasksObj,
      setTaskObj,
      addTodolist,
      onSaveTitleTask,
      onSavetitleTdl,
      deleteTask,
      isComplitedTask,
      onDeleteTdl,
      addTask,
      getTdl,
      getTask
    }
  }

  return <TodolistContext.Provider value={getData()}>{children}</TodolistContext.Provider>
}
