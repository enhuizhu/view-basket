import { useState } from 'react';
import { clone } from '../utils';
import { ProductInterface } from '../interfaces';

const initialProducts: ProductInterface[] = [
  {
    id: 1,
    name: 'Apple',
    price: 0.52,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Banana',
    price: 0.67,
    quantity: 0,
  }
];

export const useBasket = () => {
  const [ items, setItems ] = useState(initialProducts);
  
  const deleteProduct = (id: number) => {
    const newItems = clone(items).filter((item: ProductInterface) => item.id !== id);
    setItems(newItems);
  }

  const updateQuantity = (id: number, quantity: number) => {
    const newItems = clone(items);
    const itemToUpdate = clone(newItems.find((item: ProductInterface) => item.id === id));
    const itemIndex = newItems.findIndex((item:ProductInterface) => item.id === id);
    itemToUpdate.quantity = quantity;
    newItems[itemIndex] = itemToUpdate;
    setItems(newItems);
  }

  return {
    items,
    deleteProduct,
    updateQuantity,
  }
}
