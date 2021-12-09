import React, { FC } from "react";
import { StyledNumberInput, StyledButtons } from './NumberInput.style';
import { Button } from '../Button';

interface NumberInputProps {
  value: number
  onValueChange(value: number): any
}

export const NumberInput: FC<NumberInputProps> = ({
  value,
  onValueChange = () => {},
}) => {
  return <StyledNumberInput>
    <input type='number' value={value} onChange={(e) => {
      onValueChange(Number(e.target.value));
    }}/>

    <StyledButtons>
      <Button onClick={() => {
        onValueChange(value + 1);
      }}>+</Button>
      <Button onClick={() => {
        onValueChange(value - 1);
      }}>-</Button>
    </StyledButtons>
  </StyledNumberInput>
}