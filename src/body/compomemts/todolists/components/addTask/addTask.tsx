import { ChangeEvent, useState } from 'react'
import css from './addTask.module.css'
import { BasedButton, BasedInput } from '@/shered'
import { useAppDispatch } from '@/app/rootStore'
import { addTask } from '@/entity/task'

interface PropsType {
  todolistid: string
}

export function AddTask({ todolistid }: PropsType) {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false)
    }
    setValue(e.currentTarget.value.trim())
  }

  const onClickAddTask = () => {
    dispatch(
      addTask(
        {
          value,
          todolistid,
          successCallback:()=> setValue(''),
          errorCallback:()=> setError(true)
        }
        // value,
        // todolistid,
        // () => setValue(''),
        // () => setError(true)
      )
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
