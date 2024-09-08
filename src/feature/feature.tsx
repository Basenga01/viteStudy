import { BasedButton, BasedInput } from '@/shered'
import css from './feature.module.css'
import { useContext, useState } from "react";
import { AufContext } from "@/app/provaider/aufProvaider";

export const Login = () => {
  const { signIn } = useContext(AufContext)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onClick = ()=>{
    if (login && password){
      signIn(login, password)
    }
  }
  return (
    <div className={css.container}>
      <div className={css.form}>
        <BasedInput
          label={'Login'}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <BasedInput
          label={'Password'}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BasedButton onClick={onClick}>Enter</BasedButton>
      </div>
    </div>
  )
}
