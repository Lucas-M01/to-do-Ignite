import { Trash } from 'phosphor-react'
import { format } from 'date-fns'
import { AccordionContent, DataContent, Status, TrashB } from './styles'

interface TasksProps {
  id: string
  content: string
  onDeleteTask: (id: string) => void
  startDate: Date
}

export function Tasks({ id, content, onDeleteTask, startDate }: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  const startTime = format(startDate, 'dd/MM/yyyy')

  return (
    <AccordionContent>
      <DataContent>
        <div>
          <p>Tarefa: </p>
          <p>{content}</p>
          <div>
            <p>Status: </p>
            {startDate.getTime() < new Date().getTime() && (
              <Status color="yellow-500">Em andamento</Status>
            )}
          </div>
        </div>

        <div>
          <p>Data Inicio: </p>
          <p>{startTime}</p>
        </div>
      </DataContent>
      <TrashB>
        <Trash size={20} onClick={handleDeleteTask} />
      </TrashB>
    </AccordionContent>
  )
}
