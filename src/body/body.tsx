import { Todolists } from './compomemts'
import { TodolistProvider } from "@/app/provaider"


export const Body = () => {
  return (
    <TodolistProvider>
    <div>
      <Todolists />
    </div>
    </TodolistProvider>
  )
}
