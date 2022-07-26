import { ITask } from '../../../types/ITask'
import style from './Item.module.scss'

interface Props extends ITask {
  selectTask: (taskSelected: ITask) => void
}

export const Item = ({
  task,
  time,
  selected,
  success,
  id,
  selectTask
}: Props) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${
        success ? style.itemCheck : ''
      }`}
      onClick={() =>
        !success &&
        selectTask({
          task,
          time,
          selected,
          success,
          id
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {success && (
        <span className={style.success} aria-label="Tarefa Completada"></span>
      )}
    </li>
  )
}
