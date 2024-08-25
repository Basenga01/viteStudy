import { v4 as uuidv4 } from 'uuid'
import { useContext, useState } from 'react'
import { BasedButton, BasedInput } from '@/shered'
import { TodolistType } from '@/types'
import { TodolistContext } from '@/app/provaider'

export const AddTodolist = () => {
  const [value, setValue] = useState<string>('')
  const { setTodolists, setTaskObj: setTask } = useContext(TodolistContext)
  const onClickAddTodolist = () => {
    const todolistId = uuidv4()
    const newTodolist: TodolistType = {
      id: todolistId,
      title: value,
    }
    const newTask = {
      [todolistId]: [],
    }
    setTodolists((prevState) => [newTodolist, ...prevState])
    setTask((prevState) => {
      return { ...prevState, ...newTask }
    })
  }

  return (
    <div>
      <BasedInput
        placeholder={'добавление тудулиста'}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <BasedButton variant={'secondary'} onClick={onClickAddTodolist}>
        список задач. добавить
      </BasedButton>
    </div>
  )
}
