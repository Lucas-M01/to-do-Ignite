import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'
import * as Accordion from '@radix-ui/react-accordion'
import { format } from 'date-fns'

interface TasksProps {
  id: string
  content: string
  isCompleted?: boolean
  onDeleteTask: (id: string) => void
  onCompleteTask: (id: string) => void
  startDate: Date
}

export function Tasks({
  id,
  content,
  isCompleted,
  onDeleteTask,
  onCompleteTask,
  startDate,
}: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  const startTime = format(startDate, 'dd/MM/yyyy')

  return (
    <Accordion.Content className={styles.contentAccordion}>
      <div className={styles.dataContent}>
        <div>
          <p>Tarefa: </p>
          <p>{content}</p>
          <div>
            <p>Status: </p>
            {startDate.getTime() < new Date().getTime() && (
              <span className={styles.statusColorYellow}>Em andamento</span>
            )}
          </div>
        </div>

        <div>
          <p>Data Inicio: </p>
          <p>{startTime}</p>
        </div>
      </div>
      <button className={styles.trash}>
        <Trash size={20} onClick={handleDeleteTask} />
      </button>
    </Accordion.Content>
  )
}
