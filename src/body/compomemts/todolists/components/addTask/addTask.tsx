import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import css from './addTask.module.css'
import { BasedButton, BasedInput } from '@/shered'
import { Task, TaskType } from '@/types'

interface PropsType {
  setTask: Dispatch<SetStateAction<TaskType>>
  todolistid: string
}

export function AddTask({ setTask, todolistid }: PropsType) {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const addTask = () => {
    if (value) {
      setTask((prevState) => {
        const newTask: Task = { id: uuidv4(), task: value, isDone: false, todolistid }
        const tasks = prevState[todolistid]
        const newtasks = [newTask, ...tasks]
        return { ...prevState, ...{ [todolistid]: newtasks } }
      })
    } else {
      setError(true)
    }
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false)
    }
    setValue(e.currentTarget.value.trim())
  }
  return (
    <div>
      <BasedInput
        placeholder={'добавить задачу'}
        className={error ? css.Error : undefined}
        type={'text'}
        value={value}
        onKeyUp={(event) => {
          if (event.code === 'Enter') {
            addTask()
          } else if (event.code === 'Escape') {
            setValue('')
          }
        }}
        onChange={onChange}
      />
      <BasedButton onClick={addTask}>add task</BasedButton>
    </div>
  )
}
