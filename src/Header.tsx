import { BasedButton } from '@/shered'
import { useAppDispatch } from '@/app/rootStore'
import { logOut } from '@/entity/user/store'

export const Header = () => {
  const dispatch = useAppDispatch()
  const onClick = () => {
    dispatch(logOut())
  }
  return (
    <div className={'adda'}>
      <BasedButton onClick={onClick}>Выход</BasedButton>
    </div>
  )
}
