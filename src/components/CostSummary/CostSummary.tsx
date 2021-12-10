import React, { useCallback, useContext, useMemo } from "react";
import { Divider } from '../Divider';
import { BasketContext } from '../../contexts';
import { ProductInterface } from '../../interfaces';
import { StyledFlexContainer, StyledLabel } from './CostSummary.style';
import { currencyFormat } from '../../utils';
import { Button } from '../Button';

export const CostSummary = () => {
  const { items }: any = useContext(BasketContext);
  const subTotal = useMemo(() => {
    return items.reduce((acc: number, item: ProductInterface) => {
      return acc += item.price * item.quantity;
    }, 0)
  }, [items]);

  const vatTotal = subTotal * 0.2;
  const total = subTotal + vatTotal;

  const buyNow = useCallback(() => {
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(items),
    }).then(() => {
      alert('submit success');
    }).catch(() => {
      alert('error on submit');
    })
  }, [items]);

  return <div>
    <StyledFlexContainer>
      <StyledLabel>Subtotal</StyledLabel>
      <StyledLabel data-testid='sub-total'>{currencyFormat(subTotal)}</StyledLabel>
    </StyledFlexContainer>
    <StyledFlexContainer>
      <StyledLabel>Vat@20%</StyledLabel>
      <StyledLabel data-testid='vat-total'>{currencyFormat(vatTotal)}</StyledLabel>
    </StyledFlexContainer>
    <Divider />
    <StyledFlexContainer>
      <StyledLabel bold>Total</StyledLabel>
      <StyledLabel bold data-testid='total'>{currencyFormat(total)}</StyledLabel>
    </StyledFlexContainer>
    <Divider />
    <StyledFlexContainer>
      <div></div>
      <Button size='large' round type='success' onClick={buyNow}>
        Buy Now
      </Button>      
    </StyledFlexContainer>
  </div>;
}
