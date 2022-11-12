import { DialogRoot } from '../../../../components/DialogRoot'
import { Input } from '../../../../components/ModalCreateTask/styles'
import { SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <form>
        <Input type="text" placeholder="Pesquise uma tarefa" width="39.8rem" />
      </form>
      <DialogRoot />
    </SearchInputContainer>
  )
}
