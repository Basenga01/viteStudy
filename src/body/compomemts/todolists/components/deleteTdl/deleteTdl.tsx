import { BasedButton, BasedModalWindow } from '@/shered'
import { Dispatch, SetStateAction } from 'react'
import { useModal } from '@/shered'
import { TaskType, TodolistType } from '@/types'

interface PropsType {
  setTask: Dispatch<SetStateAction<TaskType>>
  todolistid: string
  setTodolists: Dispatch<SetStateAction<TodolistType[]>>
}

export const DeleteTdl = ({ setTask, setTodolists, todolistid }: PropsType) => {
  const { isOpen, openModal, closeModal } = useModal()
  const onDeleteTdl = () => {
    setTask((prevState) => {
      const newObjTask: TaskType = { ...prevState }
      delete newObjTask[todolistid]
      return newObjTask
    })
    setTodolists((prevState) => {
      return prevState.filter((tdl) => tdl.id !== todolistid)
    })
    openModal()
  }

  return (
    <>
      <BasedButton onClick={openModal}>Delete tdl</BasedButton>

      <BasedModalWindow isOpen={isOpen} onCancel={closeModal} onOk={onDeleteTdl}>
        <div>Are you shure about that?</div>
      </BasedModalWindow>
    </>
  )
}
