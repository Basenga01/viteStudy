import { BasedButton, BasedModalWindow, useModal } from "../../../../../../../shered";

interface PropsType {
  disabled: boolean
  onClick: () => void
}
export const DeleteTask = ({disabled, onClick}: PropsType)=>{
  const {isOpen, closeModal, openModal} = useModal()
  return (
    <>
  <BasedButton onClick={openModal} disabled={disabled}>
  del
  </BasedButton>
        <BasedModalWindow isOpen={isOpen} onCancel={closeModal} onOk={onClick}>
          <div>Are you shure about that?</div>
        </BasedModalWindow>
    </>
  )
}