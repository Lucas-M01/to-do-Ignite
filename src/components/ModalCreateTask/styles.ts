import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: #000;
  opacity: 60%;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  background: ${({ theme }) => theme['gray-600']};
  color: ${({ theme }) => theme['gray-200']};
  border-radius: 0.5rem;

  transform: translate(-50%, -50%);

  padding: 2rem 2.5rem;

  top: 50%;
  left: 50%;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    width: 100%;

    .informTask {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`

export const SettingsTime = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

interface InputProps {
  width?: string
}

export const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 8px;
  padding: 1rem;
  width: ${({ width }) => width ?? '2rem'};

  &:disabled {
    overflow: 'hidden';
    display: none;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

interface ButtonProps {
  color?: 'blue-dark' | 'danger-dark'
  colorHover?: 'hoverRed' | 'blue'
}

export const ButtonDefault = styled.button<ButtonProps>`
  background: ${({ theme, color }) => theme[color ?? 'blue-dark']};
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme['gray-100']};

  &:hover {
    background: ${({ theme, colorHover }) => theme[colorHover ?? 'blue']};
    transition: 0.4s;
  }
`

export const Verified = styled(Checkbox.Root)`
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme['gray-700']};
  width: 1.5rem;
  height: 1.5rem;
  background: ${({ theme }) => theme['gray-500']};

  color: ${({ theme }) => theme.green};
`

export const DivCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
