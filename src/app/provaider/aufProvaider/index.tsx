import { createContext, ReactNode, useState } from 'react'
import { BASE_URL } from '@/shered'

interface AuthContextType {
  isAuthenticated: boolean
  signIn: (login: string, password: string) => void
  authMe: ()=> void
  logOut: ()=> void
}

export const AufContext = createContext<AuthContextType>({} as AuthContextType)

interface PropsType {
  children: ReactNode
}
const ACCESS_TOKEN='access_token'
export const AufProvider = ({ children }: PropsType) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const signIn = async  (login: string, password: string) => {
    console.log(login, password)
    const result = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({ username: login, password: password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (result.ok) {
      const data = await result.json()
      localStorage.setItem(ACCESS_TOKEN, data.access_token)
      setIsAuthenticated(true)
    }}
    const authMe = async () => {
      const access_token = localStorage.getItem(ACCESS_TOKEN)
      if (access_token) {
        const result = await fetch(`${BASE_URL}/users/me`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${access_token}` },
        })
        if (result.ok) {
          setIsAuthenticated(true)
        } else {
          console.error('error')
        }
      }
    }
    const logOut = () => {
      localStorage.removeItem(ACCESS_TOKEN)
      setIsAuthenticated(false)
    }
    return (
      <AufContext.Provider
        value={{
          isAuthenticated,
          signIn,
          authMe,
          logOut
        }}
      >
        {' '}
        {children}{' '}
      </AufContext.Provider>
    )
  }
