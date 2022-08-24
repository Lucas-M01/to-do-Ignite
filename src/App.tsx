import { Header } from './components/Header'
import { PlusCircle } from 'phosphor-react'
import './Global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.create}>
        <form>
          <input type="text" placeholder='Adicione uma tarefa' className={styles.task} />
          <button className={styles.buttonCreate}>
            Criar
            <div className={styles.plus}>
              <PlusCircle size={16} />
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}