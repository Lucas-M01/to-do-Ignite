import { Header } from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import styles from './App.module.css'
import { Tasks } from './components/Tasks'
import { useState, FormEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import clipboard from './assets/Clipboard.svg'
import { DialogRoot } from './components/DialogRoot'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'
import { defaultTheme } from './styles/themes/default'

interface Task {
  id: string
  content: string
  isCompleted: boolean
  startDate: Date
  deadline?: string
}

export function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState<Task[]>([])

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()
    if (!taskList) return

    const taskId = uuidv4().toString()
    const newTask = {
      id: taskId,
      content: task,
      isCompleted: false,
      startDate: new Date(),
    }

    setTaskList((oldTask) => [...oldTask, newTask])
    setTask('')
  }

  const deleteTask = (id: string) => {
    const taskWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== id
    })
    setTaskList(taskWithoutDeletedOne)
  }

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

  function handleCompleteTask() {}

  function mouseOver() {
    let x
    x = true
  }

  const completedTasks = taskList.filter((task) => task.isCompleted).length

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Header />
        <div className={styles.container}>
          <div className={styles.create}>
            <form onSubmit={handleCreateNewTask}>
              <input
                type="text"
                placeholder="Pesquise uma tarefa"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className={styles.task}
              />
            </form>
            <DialogRoot />
          </div>

          <div className={styles.infoTasks}>
            <main>
              <div className={styles.info}>
                <p className={styles.tasksCreated}>
                  Tarefas criadas
                  <span className={styles.counter}>{taskList.length}</span>
                </p>

                <p className={styles.taskClompleted}>
                  Concluídas
                  <span className={styles.counter}>
                    {completedTasks} de {taskList.length}
                  </span>
                </p>
              </div>
              {taskList.length > 0 ? (
                <div className={styles.listTask}>
                  {taskList.map((task) => {
                    return (
                      <Accordion.Root type="single" key={uuidv4()} collapsible>
                        <Accordion.Item value={`item-${task.id}`}>
                          <Accordion.Trigger className={styles.tasks}>
                            <label
                              htmlFor={`${task.id}`}
                              className={
                                task.isCompleted
                                  ? styles.isCompleted
                                  : styles.content
                              }
                            >
                              {task.content}
                            </label>

                            <CaretDown size={16} className={styles.caretDown} />
                          </Accordion.Trigger>

                          <Tasks
                            id={task.id}
                            content={task.content}
                            isCompleted={task.isCompleted}
                            onCompleteTask={completeTask}
                            onDeleteTask={deleteTask}
                            startDate={task.startDate}
                          />
                        </Accordion.Item>
                      </Accordion.Root>
                    )
                  })}
                </div>
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
            </main>
          </div>
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
