import React, { useContext } from "react";
import { BasketContext } from '../../contexts';
import { StyledTable } from './ProductsTable.style';
import { ProductInterface } from '../../interfaces';
import { currencyFormat } from '../../utils';
import { Button } from '../Button'
import { NumberInput } from '../NumberInput';

export const ProductsTable = () => {
  const { items, updateQuantity, deleteProduct }: any = useContext(BasketContext);
  
  return <StyledTable>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Cost</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        items.map((item: ProductInterface) => {
          return <tr key={item.id}>
            <td>{item.name}</td>
            <td>{currencyFormat(item.price)}</td>
            <td>
              <NumberInput
                value={item.quantity}
                onValueChange={(value) => {
                  updateQuantity(item.id, value);
                }}
                testid={`${item.id}`}
              />
            </td>
            <td data-testid={`cost-${item.id}`}>{currencyFormat(item.price * item.quantity)}</td>
            <td><Button type='danger' data-testid={`delete-${item.id}`} onClick={() => {
              deleteProduct(item.id);
            }}>Delete</Button></td>
          </tr>
        })
      }
    </tbody>
  </StyledTable>;
}
