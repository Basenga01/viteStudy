import { ChangeEvent, useContext, useState } from 'react'
import css from './addTask.module.css'
import { BasedButton, BasedInput } from '@/shered'
import { TodolistContext } from '@/app/provaider'

interface PropsType {
  todolistid: string
}

export function AddTask({ todolistid }: PropsType) {
  const { addTask } = useContext(TodolistContext)
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false)
    }
    setValue(e.currentTarget.value.trim())
  }

  const onClickAddTask = () => {
    addTask(
      value,
      todolistid,
      () => setValue(''),
      () => setError(true)
    )
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
            onClickAddTask()
          } else if (event.code === 'Escape') {
            setValue('')
          }
        }}
        onChange={onChange}
      />
      <BasedButton onClick={onClickAddTask}>add task</BasedButton>
    </div>
  )
}
