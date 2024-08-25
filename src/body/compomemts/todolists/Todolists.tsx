import { useState } from 'react'
import { TaskType, TodolistType } from '@/types'
import { AddTodolist, Todolist } from '@/body/compomemts/todolists/components'
import css from './Todolists.module.css'
import { initialTask, initialTodolists } from '@/app/provaider/todolistProvaider/data.ts'

export type FilterStateType = 'all' | 'active' | 'closed'

export const Todolists = () => {
  const [todolists, setTodolists] = useState<TodolistType[]>(initialTodolists)
  const [tasks, setTasks] = useState<TaskType>(initialTask)

  return (
    <div className={css.container}>
      <AddTodolist setTasks={setTasks} setTodolists={setTodolists} />
      {todolists.map((todolist) => {
        return (
          <Todolist
            key={todolist.id}
            todolistid={todolist.id}
            title={todolist.title}
            tasks={tasks[todolist.id]}
            setTask={setTasks}
            setTodolists={setTodolists}
          />
        )
      })}
    </div>
  )
}