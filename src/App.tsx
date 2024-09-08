import { Header } from './Header.tsx'
import css from './App.module.css'
import clsx from 'clsx'
import { Body } from './body/body.tsx'
import { Login } from "@/feature/feature.tsx";
import { AufContext, AufProvider } from "@/app/provaider/aufProvaider";
import { useContext, useEffect } from "react";


export const App = () => {
  const {isAuthenticated, authMe} = useContext(AufContext)
useEffect(()=>{
  if(!isAuthenticated){
    authMe()
  }
},[])
  if(!isAuthenticated){
    return <Login/>
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

export const WrapperApp=()=>{
  return(
  <AufProvider>
    <App></App>
  </AufProvider>

  )}
