import { TodolistProvider } from '@/app/provaider'
import { Todolists } from './compomemts'



export const Body = () => {
  return (
    <TodolistProvider>
    <div>
      <Todolists />
    </div>
    </TodolistProvider>
    // <Fetch>Fetch</Fetch>
  )
}
