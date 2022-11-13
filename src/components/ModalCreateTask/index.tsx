import * as Dialog from '@radix-ui/react-dialog'
import {
  ButtonDefault,
  Buttons,
  Content,
  Input,
  Overlay,
  SettingsTime,
} from './styles'

export function ModalCreateTask() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Crie uma nova tarefa</Dialog.Title>

        <form>
          <div className="informTask">
            <label htmlFor="task">Informe a tarefa</label>
            <Input type="text" name="task" placeholder="Estudar..." />
          </div>

          <SettingsTime>
            <div>
              <label htmlFor="startDate">Data inicio:</label>
              <Input type="date" name="startDate"  />
            </div>

            <div>
              <label htmlFor="deadline">Data limite:</label>
              <Input type="date" name="deadline" />
            </div>
          </SettingsTime>

          <Buttons>
            <Dialog.Close asChild>
              <ButtonDefault
                color="danger-dark"
                colorHover="hoverRed"
                className="buttonCancel"
              >
                Cancelar
              </ButtonDefault>
            </Dialog.Close>

            <ButtonDefault className="buttonCreate">Criar</ButtonDefault>
          </Buttons>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
