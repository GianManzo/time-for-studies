import React from 'react'
import style from './Button.module.scss'

const Button = ({
  text,
  type = 'button',
  onClick
}: {
  text?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}) => {
  return (
    <button onClick={onClick} type={type} className={style.btn}>
      {text}
    </button>
  )
}

export default Button
