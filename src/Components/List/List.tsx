import { ITask } from '../../types/ITask'
import { Item } from './item/Item'
import style from './List.module.scss'

interface Props {
  tasks: ITask[]
  selectTask: (taskSelected: ITask) => void
}

export const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.listTask}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map(item => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  )
}
