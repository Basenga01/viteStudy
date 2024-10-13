import { Header } from './Header.tsx'
import css from './App.module.css'
import clsx from 'clsx'
import { Body } from './body/body.tsx'
import { Login } from '@/feature/feature.tsx'
import { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { RootState, rootStore, useAppDispatch } from '@/app/rootStore'
import { authMe } from '@/entity/user/api/authMe.ts'

export const App = () => {
  const { isAuthenticated, isInitialized } = useSelector((state: RootState) => state.userStore)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(authMe())
    }
  }, [])

  if(!isInitialized){
    return <>Loading...</>
  }
  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <div className={clsx(css.body, css.border)}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.body}>
        <Body />
      </div>
    </div>
  )
}

export const WrapperApp = () => {
  return (
      <Provider store={rootStore}>
        <App></App>
      </Provider>
  )
}
