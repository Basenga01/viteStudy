import { ReactNode } from 'react'
import styles from './basedModalWindow.module.css'
import { BasedButton } from '../basedButton/basedButton.tsx'
import { s } from 'vite/dist/node/types.d-aGj9QkWt'

interface PropsType {
  children: ReactNode
  titleOk?: string
  titleCancel?: string
  onCancel: () => void
  onOk: () => void
}

export const BasedModalWindow = ({
  children,
  titleOk = 'Ok',
  titleCancel = 'Cancel',
  onCancel,
  onOk,
}: PropsType) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onCancel}>
          X
        </div>
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
  )
}
