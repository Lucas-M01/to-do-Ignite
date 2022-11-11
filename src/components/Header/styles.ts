import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme['gray-700']};
  align-items: center;

  width: 100vw;
  height: 12.5rem;

  .rocket {
    width: 1.3rem;
    height: 2.25rem;
    margin-right: 0.75rem;
  }

  div > p > .span {
    color: ${({ theme }) => theme['purple-dark']};
  }
`
