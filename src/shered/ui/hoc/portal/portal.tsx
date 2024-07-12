import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: ReactNode
  nodeName?: string
}

export const Portal = ({ children, nodeName = 'root' }: Props) => {
  const targetNode = document.getElementById(nodeName)
  if (!targetNode) {
    return null
  }
  return createPortal(children, targetNode)
}