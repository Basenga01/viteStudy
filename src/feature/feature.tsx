import { BasedButton, BasedInput } from '@/shered'
import css from './feature.module.css'
import { useState } from 'react'
import { signIn } from '@/entity/user/api/signIn.ts'
import { RootState, useAppDispatch } from '@/app/rootStore'
import { useSelector } from 'react-redux'

export const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const { isLoading } = useSelector((state: RootState) => state.userStore)

  const onClick = () => {
    if (login && password) {
      dispatch(signIn({ password, username: login }))
    }
  }
  return (
    <div className={css.container}>
      <div className={css.form}>
        <BasedInput
          disabled={isLoading}
          label={'Login'}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <BasedInput
          disabled={isLoading}
          label={'Password'}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BasedButton disabled={isLoading} onClick={onClick}>
          Enter
        </BasedButton>
      </div>
    </div>
  )
}
