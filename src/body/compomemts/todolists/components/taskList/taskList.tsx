import style from '../todolist/style.module.css'
import { useContext } from 'react'
import { ChangeTitle } from '../changeTitle/ChangeTitle.tsx'
import { BasedCheckbox } from '@/shered'
import { DeleteTask } from './components'
import { TodolistContext } from '@/app/provaider'
import { TaskDTO } from "@/entity/task";

interface PropsType {
  filtredTask: TaskDTO[]
  todolistid: string
}


export function TaskList({ filtredTask, todolistid }: PropsType) {
  const {onSaveTitleTask, deleteTask, isComplitedTask} = useContext(TodolistContext)
  return (
    <ul>

      {filtredTask?.map((task) => (
        <li key={task.id} className={task.isCompleted ? style.isDone : undefined}>
          <div className={style.container}>
            <BasedCheckbox
              checked={task.isCompleted}
              onChange={(event) => isComplitedTask(event.target.checked, task.id, todolistid)}
            />
            {task.title}
            <ChangeTitle
              disabled={task.isCompleted}
              title={task.title}
              saveTitle={(value, succesesCallback) => onSaveTitleTask(todolistid, task.id, value, succesesCallback)}
            />
            <DeleteTask disabled={task.isCompleted} onClick={() => deleteTask(task.id, todolistid)}></DeleteTask>
          </div>
        </li>
      ))}
    </ul>
  )
}
