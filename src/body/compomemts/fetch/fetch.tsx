import { useEffect, useState } from 'react'
import { BasedButton } from '@/shered'

export const Fetch = () => {
  const [, setState] = useState([])
  const getNegt = () => {
    fetch('https://64c646380a25021fde9178f6.mockapi.io/testapi/api2', { method: 'GET' }).then(
      (res) => res.json().then((res1) => setState(res1))
    )
  }
  useEffect(() => {
    getNegt()
  }, [])
  return (
    <>
      <BasedButton>123123123123</BasedButton>
      <ul>
        {/*{state.map((el) => (*/}
        {/*  <li>{el.first_name}</li>*/}
        {/*))}*/}
      </ul>
    </>
  )
}