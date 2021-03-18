import { MouseEvent } from 'react'

export interface ButtonProps {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  label?: string
}
