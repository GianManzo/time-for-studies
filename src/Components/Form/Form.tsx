import React, { FormEvent } from 'react'
import { ITask } from '../../types/ITask'
import Button from '../Button/Button'
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

export const Form = ({
  setTasks
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}) => {
  const [tasks, setTask] = React.useState({
    task: '',
    time: '00:00'
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks(taskOld => [
      ...taskOld,
      {
        ...tasks,
        selected: false,
        success: false,
        id: uuidv4()
      }
    ])
    clearInput()
  }

  function clearInput() {
    setTask({ ...tasks, time: '00:00', task: '' })
    document.getElementById('task')?.focus()
  }

  return (
    <form className={style.newTask} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo..
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você deseja estudar?"
            required
            value={tasks.task}
            onChange={event => setTask({ ...tasks, task: event.target.value })}
          />
        </label>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Tempo
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            value={tasks.time}
            onChange={event => setTask({ ...tasks, time: event.target.value })}
            required
          />
        </label>
      </div>
      <Button type="submit" text="adicionar" />
    </form>
  )
}
