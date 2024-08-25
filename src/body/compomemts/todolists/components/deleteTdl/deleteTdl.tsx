import { BasedButton, BasedModalWindow, useModal } from '@/shered'
import { useContext } from 'react'
import { TaskType } from '@/types'
import { TodolistContext } from '@/app/provaider'

interface PropsType {
  todolistid: string
}

export const DeleteTdl = ({ todolistid }: PropsType) => {
  const { isOpen, openModal, closeModal } = useModal()
  const { setTodolists: setTodolists, setTaskObj: setTask } = useContext(TodolistContext)
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
