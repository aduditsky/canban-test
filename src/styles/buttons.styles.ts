import { ButtonProps } from '@/components/buttons/theme';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: ${(props) =>
    typeof props.size === 'number'
      ? `${props.size / 2}px ${props.size}px`
      : '10px 20px'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
`;
