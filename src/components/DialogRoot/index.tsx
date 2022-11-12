import * as Dialog from '@radix-ui/react-dialog'
import { PlusCircle } from 'phosphor-react'
import { ModalCreateTask } from '../ModalCreateTask'
import { ButtonCreate } from './styles'

export function DialogRoot() {
  return (
    <Dialog.Root>
      <ButtonCreate>
        Criar
        <div className="plus">
          <PlusCircle size={16} />
        </div>
      </ButtonCreate>
      <ModalCreateTask />
    </Dialog.Root>
  )
}
