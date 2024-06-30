import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import css from './basedCheckbox.module.css'
interface PropsType
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label?: string
}

export const BasedCheckbox = ({ type, ...props }: PropsType) => {
  return<label className={css.container}>
    <input className={css.checkBox}  {...props} type={"checkbox"} />
    <span className={css.checkMark}/>
    </label>

}