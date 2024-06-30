import { v4 as uuidv4 } from 'uuid'
import { Dispatch, SetStateAction, useState } from 'react'
import { TaskType, TodolistType } from '../../Todolists.tsx'
import { BasedButton } from '../../../../../shered/ui/basedButton/basedButton.tsx'
import { BasedInput } from '../../../../../shered'

interface PropsType {
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
  setTasks: Dispatch<SetStateAction<TaskType>>
}

export const AddTodolist = ({ setTodolists, setTasks }: PropsType) => {
  const [value, setValue] = useState<string>('')
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
    setTasks((prevState) => {
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
