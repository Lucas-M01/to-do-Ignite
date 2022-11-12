import { AccordionTasks, ListTasksContainer } from './styles'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'
import { Tasks } from '../../../../components/Tasks'
import { Task } from '../..'
import { useState } from 'react'

export function ListTasks() {
  const [taskList, setTaskList] = useState<Task[]>([])

  const deleteTask = (id: string) => {
    const taskWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== id
    })
    setTaskList(taskWithoutDeletedOne)
  }
  return (
    <ListTasksContainer>
      {taskList.map((task) => {
        return (
          <Accordion.Root type="single" key={uuidv4()} collapsible>
            <Accordion.Item value={`item-${task.id}`}>
              <AccordionTasks>
                <label htmlFor={`${task.id}`}>{task.content}</label>

                <CaretDown size={16} className="caretDown" />
              </AccordionTasks>

              <Tasks
                id={task.id}
                content={task.content}
                onDeleteTask={deleteTask}
                startDate={task.startDate}
              />
            </Accordion.Item>
          </Accordion.Root>
        )
      })}
    </ListTasksContainer>
  )
}
