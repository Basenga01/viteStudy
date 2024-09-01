import { BasedButton, BasedModalWindow, useModal } from '@/shered'
import { useContext } from 'react'
import { TodolistContext } from '@/app/provaider'

interface PropsType {
  todolistid: string
}

export const DeleteTdl = ({ todolistid }: PropsType) => {
  const { onDeleteTdl } = useContext(TodolistContext)
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <BasedButton onClick={openModal}>Delete tdl</BasedButton>

      <BasedModalWindow
        isOpen={isOpen}
        onCancel={closeModal}
        onOk={() => onDeleteTdl(todolistid, closeModal)}
      >
        <div>Are you shure about that?</div>
      </BasedModalWindow>
    </>
  )
}
