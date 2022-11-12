import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

export const ListTasksContainer = styled.div`
  overflow: auto;
  max-height: 25.75rem;
  width: 46rem;

  &::-webkit-scrollbar {
    width: 0.25rem;
    height: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: ${({ theme }) => theme['gray-400']};
  }
`

export const AccordionTasks = styled(Accordion.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  gap: 0.75rem;

  background-color: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  margin-top: 0.75rem;
  width: 100%;

  .caretDown {
    color: ${({ theme }) => theme['gray-100']};
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  [data-state='open'] > .caretDown {
    transform: rotate(180deg);
  }
  /* ,
  .tasks[data-state='open']
  } */
`
