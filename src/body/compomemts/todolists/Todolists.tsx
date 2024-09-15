import { useContext, useEffect } from "react";
import { AddTodolist, Todolist } from '@/body/compomemts/todolists/components'
import css from './Todolists.module.css'
import { TodolistContext } from '@/app/provaider'

export type FilterStateType = 'all' | 'active' | 'closed'

export const Todolists = () => {
  const { todoLists, getTdl, getTask } = useContext(TodolistContext)
  useEffect(()=>{
    getTdl()
    getTask()
  }, [])

  return (
    <div className={css.container}>
      <AddTodolist />
      {todoLists.map((todolist) => {
        return <Todolist key={todolist.id} todolistid={todolist.id} title={todolist.title} />
      })}
    </div>
  )
}
