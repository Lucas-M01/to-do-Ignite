import styled from 'styled-components'

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