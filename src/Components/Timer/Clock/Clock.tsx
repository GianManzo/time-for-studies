import React from 'react'
import style from './Clock.module.scss'

interface Props {
  time: number | undefined
}
export const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [indexMinutes, indexMinutesUnity] = String(minutes).padStart(2, '0')
  const [indexSeconds, indexSecondsUnity] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.ClockNumber}>{indexMinutes}</span>
      <span className={style.ClockNumber}>{indexMinutesUnity}</span>
      <span className={style.ClockDivision}>:</span>
      <span className={style.ClockNumber}>{indexSeconds}</span>
      <span className={style.ClockNumber}>{indexSecondsUnity}</span>
    </>
  )
}
