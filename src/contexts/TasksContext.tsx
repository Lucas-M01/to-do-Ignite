import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Task {
  id: string
  task: string
  isCompleted: boolean
  startDate: Date
  deadline?: string
}

interface TasksContextType {
  tasks: Task[]
  fetchTasks: (query: string) => Promise<void>
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  async function fetchTasks(query?: string) {
    const response = await api.get('tasks', {
      params: {
        q: query,
      },
    })

    setTasks(response.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, fetchTasks }}>
      {children}
    </TasksContext.Provider>
  )
}
