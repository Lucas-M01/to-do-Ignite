import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ButtonCreate = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  border: 0;
  cursor: pointer;

  background-color: ${({ theme }) => theme['blue-dark']};
  color: ${({ theme }) => theme['gray-100']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['purple-dark']};
  }

  .plus {
    display: flex;
    padding-left: 0.5rem;
  }
`
