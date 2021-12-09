import React, { FC } from "react";
import { StyledButton } from './Button.style';

interface ButtonProps {
  size?: 'small' | 'large'
  round?: boolean
  type?: 'success' | 'danger' | 'warn'
  children?: any
  [key: string]: any
}

export const Button: FC<ButtonProps> = ({
  size = 'small',
  round = false,
  type = 'success',
  children,
  ...rest
}) => {
  return <StyledButton 
    size={size}
    round={round}
    type={type}
    {...rest}
  >
    { children}
  </StyledButton>
};
