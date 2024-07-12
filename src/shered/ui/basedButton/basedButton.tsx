import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import css from './basedButton.module.css'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'outline' | 'danger'

interface PropsType
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: Variant
}

export const BasedButton = ({ variant = 'primary', children, className, ...props }: PropsType) => {
  return (
    <button {...props} className={clsx(css.button, className, css[variant])}>
      {children}
    </button>
  )
}