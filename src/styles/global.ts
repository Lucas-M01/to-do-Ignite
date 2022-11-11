import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    --webkit-font-smoothing: antialiased;
    }

    body {
        background-color: ${({ theme }) => theme['gray-600']};
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 1px ${({ theme }) => theme['purple-dark']};
    }
`
