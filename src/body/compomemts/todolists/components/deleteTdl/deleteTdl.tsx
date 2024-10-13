import { BasedButton, BasedModalWindow, useModal } from '@/shered'
import { useAppDispatch } from '@/app/rootStore'
import { deleteTdl } from '@/entity/todolist/api/deleteTdl.ts'

interface PropsType {
  todolistid: string
}

export const DeleteTdl = ({ todolistid }: PropsType) => {
  const dispatch = useAppDispatch()
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <BasedButton onClick={openModal}>Delete tdl</BasedButton>

      <BasedModalWindow
        isOpen={isOpen}
        onCancel={closeModal}
        onOk={() => dispatch(deleteTdl({ todolistId: todolistid, successesCallback: closeModal }))}
      >
        <div>Are you shure about that?</div>
      </BasedModalWindow>
    </>
  )
}
