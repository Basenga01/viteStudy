import { ReactNode } from 'react'
import styles from './basedModalWindow.module.css'
import { BasedButton } from '../basedButton/basedButton.tsx'
import { Portal } from "../hoc/portal/portal.tsx";

interface PropsType {
  children: ReactNode
  titleOk?: string
  titleCancel?: string
  onCancel: () => void
  onOk: () => void
  isOpen: boolean
}

export const BasedModalWindow = ({
  children,
  titleOk = 'Ok',
  titleCancel = 'Cancel',
  onCancel,
  onOk,
  isOpen
}: PropsType) => {
  if(!isOpen){
    return null
  }
  return(
    <Portal>
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onCancel}></div>
        <div className={styles.body}>{children}</div>
        <div className={styles.containerBtn}>
          <BasedButton variant={'primary'} onClick={onOk}>
            {titleOk}
          </BasedButton>
          <BasedButton variant={'secondary'} onClick={onCancel}>
            {titleCancel}
          </BasedButton>
        </div>
      </div>
    </div>
    </Portal>
  )
}
