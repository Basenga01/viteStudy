import { useEffect } from 'react'
import { AddTodolist, Todolist } from '@/body/compomemts/todolists/components'
import css from './Todolists.module.css'
import { RootState, useAppDispatch } from '@/app/rootStore'
import { getMyTdl } from '@/entity/todolist'
import { useSelector } from 'react-redux'
import { getMyTask } from "@/entity/task";

export type FilterStateType = 'all' | 'active' | 'closed'

export const Todolists = () => {
  const {todoLists}=useSelector((state: RootState) => state.todolistStore)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getMyTdl())
  }, [])

  const {tasks} = useSelector ((state: RootState)=> state.taskStore)
  useEffect(() => {
    dispatch((getMyTask()))
  }, []);
  console.log(tasks)

  return (
    <div className={css.container}>
      <AddTodolist />
      {todoLists.map((todolist) => {
        return <Todolist key={todolist.id} todolistid={todolist.id} title={todolist.title} />
      })}
    </div>
  )
}
