import { TaskType, TodolistType } from '../../Todolists.tsx'
import { BasedButton, BasedModalWindow } from '../../../../../shered'
import { Dispatch, SetStateAction, useState } from 'react'

interface PropsType {
  setTask: Dispatch<SetStateAction<TaskType>>
  todolistid: string
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
}

export const DeleteTdl = ({ setTask, setTodolists, todolistid }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const onDeleteTdl = () => {
    setTask((prevState) => {
      const newObjTask: TaskType = { ...prevState }
      delete newObjTask[todolistid]
      return newObjTask
    })
    setTodolists((prevState) => {
      return prevState.filter((tdl) => tdl.id !== todolistid)
    })
    setIsOpen(false)
  }

  return (
    <>
      <BasedButton onClick={() => setIsOpen(true)}></BasedButton>
      {isOpen && (
        <BasedModalWindow onCancel={() => setIsOpen(false)} onOk={onDeleteTdl}>
          <div>Are you shure about that?</div>
        </BasedModalWindow>
      )}
    </>
  )
}