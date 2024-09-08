import { useContext } from "react";
import { AufContext } from "@/app/provaider/aufProvaider";
import { BasedButton } from "@/shered";

export const Header = () => {
  const {logOut} = useContext(AufContext)
  return (
    <div className={'adda'}>
      <BasedButton onClick={logOut}>Выход</BasedButton>
    </div>
  )
}
