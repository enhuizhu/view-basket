import React, { FC } from "react";
import { StyledNumberInput, StyledButtons } from './NumberInput.style';
import { Button } from '../Button';

interface NumberInputProps {
  value: number
  onValueChange(value: number): any
  testid: any
}

export const NumberInput: FC<NumberInputProps> = ({
  value,
  onValueChange = () => {},
  testid,
}) => {
  return <StyledNumberInput>
    <input type='number' value={value} onChange={(e) => {
      onValueChange(Number(e.target.value));
    }}/>

    <StyledButtons>
      <Button type="warn" onClick={() => {
        onValueChange(value - 1);
      }} data-testid={`reduce-${testid}`}>-</Button>
      <Button onClick={() => {
        onValueChange(value + 1);
      }} data-testid={`plus-${testid}`}>+</Button>
    </StyledButtons>
  </StyledNumberInput>
}