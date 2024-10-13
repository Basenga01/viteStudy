import { useState } from 'react'
import { BasedButton, BasedInput } from '@/shered'
import { RootState, useAppDispatch } from "@/app/rootStore";
import { addTdl } from '@/entity/todolist/api/addTdl.ts'
import { useSelector } from "react-redux";

export const AddTodolist = () => {
  const [value, setValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const {isLoading}=useSelector((state: RootState)=> state.todolistStore)

  const onClear = () => {
    setValue('')
  }

  const onClick = () => {
    if (!value){
      alert('ты ишак')
    }
    dispatch(addTdl({ title: value, description: '', successesCallback: onClear }))
  }

  return (
    <div>
      <BasedInput
        disabled={isLoading}
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
