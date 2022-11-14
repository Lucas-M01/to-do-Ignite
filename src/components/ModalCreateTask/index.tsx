import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ButtonDefault,
  Buttons,
  Content,
  Input,
  Overlay,
  SettingsTime,
  Verified,
  DivCheck,
} from './styles'
import { Check } from 'phosphor-react'
import { RegularText } from '../Typography'
import { useState } from 'react'

const newDateStartAndEnd = z
  .object({
    startDate: z.string(),
    deadline: z.string().min(10).max(10),
  })
  .partial()

const newTaskFormSchema = z.object({
  task: z.string().max(150).min(3),
  newDateStartAndEnd,
})

type NewTaskFormInputs = z.infer<typeof newTaskFormSchema>

export function ModalCreateTask() {
  const [checkDates, setCheckDates] = useState(false)
  const { register, handleSubmit } = useForm<NewTaskFormInputs>({
    resolver: zodResolver(newTaskFormSchema),
  })

  function handleTaskSubmit(data: NewTaskFormInputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Crie uma nova tarefa</Dialog.Title>

        <form onSubmit={handleSubmit(handleTaskSubmit)}>
          <div className="informTask">
            <label htmlFor="task">Informe a tarefa</label>
            <Input
              type="text"
              width="15rem"
              placeholder="Estudar"
              required
              {...register('task')}
            />
            <DivCheck>
              <Verified
                checked={checkDates}
                onCheckedChange={(checked) => {
                  if (checked === true) {
                    setCheckDates(true)
                  } else {
                    setCheckDates(false)
                  }
                }}
              >
                <Checkbox.Indicator>
                  <Check size={16} />
                </Checkbox.Indicator>
              </Verified>
              <RegularText size="s">Adicionar datas?</RegularText>
            </DivCheck>
          </div>

          <SettingsTime>
            <div>
              <label htmlFor="startDate" defaultChecked={checkDates}>
                Data inicio
              </label>
              <Input
                type="text"
                width="7rem"
                // eslint-disable-next-line
                pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                placeholder="dia/mês/ano"
                id="startDate"
                minLength={10}
                maxLength={10}
                disabled={!checkDates}
                required
                {...register('newDateStartAndEnd.startDate')}
              />
            </div>

            <div>
              <label htmlFor="deadline">Data limite</label>
              <Input
                type="text"
                id="deadline"
                minLength={10}
                maxLength={10}
                width="7rem"
                // eslint-disable-next-line
                pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                placeholder="dia/mês/ano"
                disabled={!checkDates}
                required
                {...register('newDateStartAndEnd.deadline')}
              />
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
