import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

export const AccordionContent = styled(Accordion.Content)`
  display: flex;
  background-color: ${({ theme }) => theme['gray-400']};
  color: ${({ theme }) => theme['gray-100']};

  justify-content: space-between;
`

export const DataContent = styled.div`
  display: flex;
  padding: 1rem;
`

interface StatusCollorsProps {
  color?: 'yellow-500' | 'green-500' | 'red-500' | 'gray-500'
}

export const Status = styled.span<StatusCollorsProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${({ theme, color }) => theme[color ?? 'gray-500']};
  }
`

export const TrashB = styled.button`
  margin-left: 0.75rem;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme['gray-300']};
  cursor: pointer;
  background: transparent;

  transition: color 0.1s;

  &:hover {
    color: ${({ theme }) => theme.danger};
  }
`
