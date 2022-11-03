import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'
import { ModalCreateTask } from '../ModalCreateTask'
import styles from './DialogRoot.module.css'

export function DialogRoot() {
    return(
        <Dialog.Root>
            <Dialog.DialogTrigger className={styles.buttonCreate} >
                Criar 
                <div className={styles.plus}>
                  <PlusCircle size={16} />
                </div>
            </Dialog.DialogTrigger>
            <ModalCreateTask />
        </Dialog.Root>
    )
}