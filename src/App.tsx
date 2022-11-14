import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { TasksProvider } from './contexts/TasksContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TasksProvider>
        <Header />
        <Home />
      </TasksProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
