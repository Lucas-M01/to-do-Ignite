import styled, { css } from 'styled-components'

interface RegularTextProps {
  title?: string
  size?: 'l' | 'm' | 's'
  colors?: 'purple' | 'blue' | 'green' | 'yellow' | 'danger' | 'red'
  color?: string
  weight?: string | number
}

export const RegularText = styled.p<RegularTextProps>`
  line-height: 140%;
  font-weight: ${({ weight }) => weight ?? 400};

  ${({ color, colors }) => {
    switch (colors) {
      case 'purple':
        return css`
          color: ${({ theme }) => theme.purple};
        `
      case 'blue':
        return css`
          color: ${({ theme }) => theme.blue};
        `
      case 'danger':
        return css`
          color: ${({ theme }) => theme.danger};
        `
      case 'green':
        return css`
          color: ${({ theme }) => theme.green};
        `
      case 'red':
        return css`
          color: ${({ theme }) => theme.red};
        `
      case 'yellow':
        return css`
          color: ${({ theme }) => theme.yellow};
        `
      default:
        return css`
          color: ${({ theme }) => theme['gray-300']};
        `
    }
  }}

  ${({ title, size }: RegularTextProps) =>
    title === 'true'
      ? css`
          font-size: ${({ theme }) =>
            theme.textSizes[`text-title-${size ?? 'm'}`]};
          color: ${({ theme }) => theme.blue};
        `
      : css`
          font-size: ${({ theme }) =>
            theme.textSizes[`text-regular-${size ?? 'm'}`]};
        `}
`
