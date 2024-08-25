import { useContext, useState } from 'react'
import { BasedButton, BasedInput } from '@/shered'
import { TodolistContext } from '@/app/provaider'

export const AddTodolist = () => {
  const [value, setValue] = useState<string>('')
  const { addTodolist } = useContext(TodolistContext)

  const onClear = () => {
    setValue('')
  }

  const onClick = () => {
    addTodolist(value, onClear)
  }

  return (
    <div>
      <BasedInput
        placeholder={'добавление тудулиста'}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <BasedButton variant={'secondary'} onClick={onClick}>
        список задач. добавить
      </BasedButton>
    </div>
  )
}
