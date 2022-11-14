import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

export const HomeContainer = styled.div`
  width: 100%;
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
    margin: 0 1rem 2rem 1rem;
  }
`

export const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 46rem;

  header {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-100']};
    height: 1.2rem;
    width: 100%;

    .counter {
      margin-left: 0.5rem;
      padding: 0.125rem 0.5rem;
      color: ${({ theme }) => theme['gray-200']};
      background: ${({ theme }) => theme['gray-400']};
      border-radius: 999px;
    }

    .taskCreated {
      color: ${({ theme }) => theme.blue};
    }

    .taskCompleted {
      color: ${({ theme }) => theme.blue};
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`

export const NoTask = styled.div`
  display: flex;
  width: 100%;
  height: 15.25rem;
  align-items: center;
  margin-top: 1.5rem;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;

  p {
    margin-top: 2rem;
  }
`
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
