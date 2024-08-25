import style from '../todolist/style.module.css'

import { ChangeEvent, useContext } from 'react'

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
  const { setTaskObj: setTask } = useContext(TodolistContext)

  function onSaveTitleTask(id: string, value: string, onSuccsesCallback: () => void) {
    setTask((prevState) => {
      const tasks = prevState[todolistid]
      const newTasks = tasks.map((item) => (item.id === id ? { ...item, task: value } : item))
      return { ...prevState, ...{ [todolistid]: newTasks } }
    })
    onSuccsesCallback()
  }

  function deleteTask(id: string) {
    setTask((prevState) => {
      const tagretTodolist = prevState[todolistid]
      const filtredTask = tagretTodolist.filter((el) => el.id !== id)
      return { ...prevState, ...{ [todolistid]: filtredTask } }
    })
  }

  function checkboxCheck(el: ChangeEvent<HTMLInputElement>, id: string) {
    setTask((prevState) => {
      const tasks = prevState[todolistid]
      const resultTasks = tasks.map((task) =>
        task.id === id ? { ...task, isDone: el.target.checked } : task
      )
      const resObj = {
        [todolistid]: resultTasks,
      }
      return { ...prevState, ...resObj }
    })
  }

  return (
    <ul>
      {/*<input type={"checkbox"} checked={tasks[0].isDone}/>{tasks[0].task}*/}

      {filtredTask.map((task) => (
        <li key={task.id} className={task.isDone ? style.isDone : undefined}>
          <div className={style.container}>
            <BasedCheckbox
              checked={task.isDone}
              onChange={(event) => checkboxCheck(event, task.id)}
            />
            {task.task}
            <ChangeTitle
              disabled={task.isDone}
              title={task.task}
              saveTitle={(value, callback) => onSaveTitleTask(task.id, value, callback)}
            />
            <DeleteTask disabled={task.isDone} onClick={() => deleteTask(task.id)}></DeleteTask>
          </div>
        </li>
      ))}
    </ul>
  )
}
