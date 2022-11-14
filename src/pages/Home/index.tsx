import { useContext } from 'react'
import clipboard from '../../assets/Clipboard.svg'
import {
  AccordionTasks,
  HomeContainer,
  HomeMain,
  ListTasksContainer,
  NoTask,
} from './styles'
import { RegularText } from '../../components/Typography'
import { SearchInput } from './components/SearchInput'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'
import { Tasks } from '../../components/Tasks'
import { TasksContext } from '../../contexts/TasksContext'

export function Home() {
  const { tasks } = useContext(TasksContext)

  const completedTasks = tasks.filter((task) => task.isCompleted).length
  return (
    <HomeContainer>
      <SearchInput />
      <HomeMain>
        <header>
          <RegularText size="s" colors="blue" className="tasksCreated">
            Tarefas criadas
            <span className="counter">{tasks.length}</span>
          </RegularText>

          <RegularText size="s" colors="purple" className="taskClompleted">
            Concluídas
            <span className="counter">
              {completedTasks} de {tasks.length}
            </span>
          </RegularText>
        </header>
        {tasks.length > 0 ? (
          <ListTasksContainer>
            {tasks.map((task) => {
              return (
                <Accordion.Root key={task.id} type="single" collapsible>
                  <Accordion.Item value={`item-${task.id}`}>
                    <AccordionTasks>
                      <label htmlFor={`${task.id}`}>{task.task}</label>

                      <CaretDown size={16} className="caretDown" />
                    </AccordionTasks>

                    <Tasks
                      id={task.id}
                      content={task.task}
                      startDate={task.startDate}
                      deadline={task.deadline}
                      isCompleted={task.isCompleted}
                    />
                  </Accordion.Item>
                </Accordion.Root>
              )
            })}
          </ListTasksContainer>
        ) : (
          <NoTask>
            <img src={clipboard} alt="" />
            <RegularText color="300">
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </RegularText>
          </NoTask>
        )}
      </HomeMain>
    </HomeContainer>
  )
}
