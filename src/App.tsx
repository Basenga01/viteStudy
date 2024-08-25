import { Header } from './Header.tsx'

import css from './App.module.css'
import clsx from 'clsx'
import { Body } from './body/body.tsx'

export const App = () => {
  return (
    <div className={clsx(css.body, css.border)}>
      123
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.body}>
        <Body />
      </div>
    </div>
  )
}
