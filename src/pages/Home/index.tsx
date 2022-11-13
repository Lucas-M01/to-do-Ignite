import { useState } from 'react'
import clipboard from '../../assets/Clipboard.svg'
import { HomeContainer, HomeMain, NoTask } from './styles'
import { RegularText } from '../../components/Typography'
import { SearchInput } from './components/SearchInput'
import { ListTasks } from './components/ListTasks'

export interface Task {
  id: string
  content: string
  isCompleted: boolean
  startDate: Date
  deadline?: string
}

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])

  const completeTask = (id: string) => {
    const editTask = taskList.map((task) =>
      task.id === id
        ? {
            ...task,
            isCompleted: !task.isCompleted,
          }
        : task,
    )

    setTaskList(editTask)
  }

  console.log(completeTask)

  const completedTasks = taskList.filter((task) => task.isCompleted).length
  return (
    <HomeContainer>
      <SearchInput />
      <HomeMain>
        <header>
          <RegularText size="s" colors="blue" className="tasksCreated">
            Tarefas criadas
            <span className="counter">{taskList.length}</span>
          </RegularText>

          <RegularText size="s" colors="purple" className="taskClompleted">
            Concluídas
            <span className="counter">
              {completedTasks} de {taskList.length}
            </span>
          </RegularText>
        </header>
        {taskList.length > 0 ? (
          <ListTasks />
        ) : (
          <NoTask>
            <img src={clipboard} />
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
