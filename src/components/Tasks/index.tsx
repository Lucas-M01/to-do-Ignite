import { Trash } from 'phosphor-react'
import { format } from 'date-fns'
import { AccordionContent, DataContent, Status, TrashB } from './styles'

export interface TasksProps {
  id: string
  content: string
  isCompleted: boolean
  onDeleteTask?: (id: string) => void
  startDate: Date
  deadline?: string | undefined
}

export function Tasks({
  id,
  content,
  onDeleteTask,
  startDate,
  deadline,
}: TasksProps) {
  // const startTime = format(startDate, 'dd/MM/yyyy')
  // const deadlineFormat = (data: string) => {
  //   const finalDate = new Date(data)
  //   return format(finalDate, 'dd/MM/yyyy')
  // }

  return (
    <AccordionContent>
      <DataContent>
        <div>
          <p>Tarefa: </p>
          <p>{content}</p>
          <div>
            <p>Status: </p>
            {/* {startDate?.getTime() < new Date().getTime() && (
              <Status color="yellow-500">Em andamento</Status>
            )} */}
          </div>
        </div>

        <div>
          <p>Data Inicio: </p>
          {/* <p>{startTime}</p> */}
        </div>
        {/* {deadline === undefined ? (
          <div>
            <p>Data Limite:</p>
            <p>Não determinado.</p>
          </div>
        ) : (
          <div>
            <p>Data Limite:</p>
            <p>{deadlineFormat(deadline)}</p>
          </div>
        )} */}
      </DataContent>
      <TrashB>
        <Trash size={20} />
      </TrashB>
    </AccordionContent>
  )
}
