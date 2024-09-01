import style from '../todolist/style.module.css'

import { useContext } from 'react'

import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx'
import { BasedCheckbox } from '@/shered'
import { DeleteTask } from './components'
import { TodolistContext } from '@/app/provaider'
import { Task } from '@/types'

interface PropsType {
  tasks: Task[]
  filtredTask: Task[]
  todolistid: string
}

export function TaskList({ filtredTask, todolistid }: PropsType) {
  const {onSaveTitleTask, deleteTask, isComplitedTask} = useContext(TodolistContext)



  return (
    <ul>
      {/*<input type={"checkbox"} checked={tasks[0].isDone}/>{tasks[0].task}*/}

      {filtredTask.map((task) => (
        <li key={task.id} className={task.isDone ? style.isDone : undefined}>
          <div className={style.container}>
            <BasedCheckbox
              checked={task.isDone}
              onChange={(event) => isComplitedTask(event.target.checked, task.id, todolistid)}
            />
            {task.task}
            <ChangeTitle
              disabled={task.isDone}
              title={task.task}
              saveTitle={(value, succesesCallback) => onSaveTitleTask(todolistid, task.id, value, succesesCallback)}
            />
            <DeleteTask disabled={task.isDone} onClick={() => deleteTask(task.id, todolistid)}></DeleteTask>
          </div>
        </li>
      ))}
    </ul>
  )
}
