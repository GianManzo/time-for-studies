import React from 'react'
import { Form } from './Components/Form/Form'
import { List } from './Components/List/List'
import style from './App.module.scss'
import { Timer } from './Components/Timer/Timer'
import { ITask } from './types/ITask'

export const App = () => {
  const [tasks, setTasks] = React.useState<ITask[] | []>([])
  const [selected, setSelected] = React.useState<ITask>()

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected)
    setTasks(tasksOld =>
      tasksOld.map(task => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false
      }))
    )
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(tasksOld =>
        tasksOld.map(task => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              success: true
            }
          }
          return task
        })
      )
    }
  }

  return (
    <div className={style.appStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  )
}
