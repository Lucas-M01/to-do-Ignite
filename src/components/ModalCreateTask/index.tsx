import * as Dialog from '@radix-ui/react-dialog'
import styles from './ModalCreateTask.module.css'

export function ModalCreateTask(){
    return(
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />
                <Dialog.Content className={styles.content}>
                    <Dialog.Title>Crie uma nova tarefa</Dialog.Title>
                    
                    <form className={styles.form}>
                        <div className={styles.informTask}>
                            <label htmlFor="task">Informe a tarefa</label>
                            <input type="text" name="task" />
                        </div>

                        <div>
                            <div>
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>

                            <div>
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className={styles.buttons}>
                            <Dialog.Close asChild>
                                <button className={styles.buttonCancel} >
                                    Cancelar
                                </button>
                            </Dialog.Close>

                            <button className={styles.buttonCreate}>
                                Criar
                            </button>
                        </div>
                    </form>


                </Dialog.Content>
            </Dialog.Portal>
    )
}