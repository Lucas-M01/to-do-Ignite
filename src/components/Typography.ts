import styled, { css } from 'styled-components'

interface RegularTextProps {
  title?: string
  size?: 'l' | 'm' | 's'
  color?: '100' | '300' | '400'
  weight?: string | number
}

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme[`gray-${color ?? '100'}`]};
  line-height: 140%;
  font-weight: ${({ weight }) => weight ?? 400};

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
