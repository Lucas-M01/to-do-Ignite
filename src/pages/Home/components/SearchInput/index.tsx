import { DialogRoot } from '../../../../components/DialogRoot'
import { Input } from '../../../../components/ModalCreateTask/styles'
import { useForm } from 'react-hook-form'
import { SearchInputContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TasksContext } from '../../../../contexts/TasksContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchInput() {
  const { fetchTasks } = useContext(TasksContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTasks(data: SearchFormInput) {
    await fetchTasks(data.query)
  }

  return (
    <SearchInputContainer>
      <form onSubmit={handleSubmit(handleSearchTasks)}>
        <Input
          type="text"
          placeholder="Pesquise uma tarefa"
          width="39.8rem"
          {...register('query')}
        />
      </form>
      <DialogRoot />
    </SearchInputContainer>
  )
}
