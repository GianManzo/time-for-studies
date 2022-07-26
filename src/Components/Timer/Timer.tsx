import React from 'react'
import { timeForSeconds } from '../../common/utils/time'
import { ITask } from '../../types/ITask'
import Button from '../Button/Button'
import { Clock } from './Clock/Clock'
import style from './Timer.module.scss'

interface Props {
  selected: ITask | undefined
  finishTask: () => void
}

export const Timer = ({ selected, finishTask }: Props) => {
  const [time, setTime] = React.useState<number>()

  React.useEffect(() => {
    if (selected?.time) setTime(timeForSeconds(selected.time))
  }, [selected])

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return regressive(counter - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>

      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)} text="Iniciar" />
    </div>
  )
}
