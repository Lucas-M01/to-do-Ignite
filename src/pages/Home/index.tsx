import { Tasks } from '../../components/Tasks'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import clipboard from '../../assets/Clipboard.svg'

import { CaretDown } from 'phosphor-react'
import { HomeContainer, HomeMain, ListTasks } from './styles'
import { RegularText } from '../../components/Typography'
import { SearchInput } from './components/SearchInput'

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

  const completedTasks = taskList.filter((task) => task.isCompleted).length
  return (
    <HomeContainer>
      <SearchInput />
      <HomeMain>
        <header>
          <RegularText className="tasksCreated">
            Tarefas criadas
            <span className="counter">{taskList.length}</span>
          </RegularText>

          <RegularText className="taskClompleted">
            Concluídas
            <span className="counter">
              {completedTasks} de {taskList.length}
            </span>
          </RegularText>
        </header>
        {taskList.length > 0 ? (
          <ListTasks />
        ) : (
          <div className={styles.noTasks}>
            <img src={clipboard} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </HomeMain>
    </HomeContainer>
  )
}
