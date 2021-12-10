import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('checkout testing suite', () => {
  beforeEach(() => {
    render(<App />);
  });
  
  it('should contain expected elements', () => {
    expect(screen.queryByText('Review Your Order & Complete Checkout')).toBeInTheDocument();
    expect(screen.queryByText('Buy Now')).toBeInTheDocument();
  });

  it('shoule delete the item when user click delete button', () => {
    const deleteBtn1 = screen.queryByTestId('delete-1');

    expect(deleteBtn1).toBeInTheDocument();
    userEvent.click(deleteBtn1);
    expect(deleteBtn1).not.toBeInTheDocument();
  });

  it('should change the cost when user change qunatity', () => {
    const const1Ele = screen.queryByTestId('cost-1');
    const subTotalEle = screen.queryByTestId('sub-total');
    const vatTotalEle = screen.queryByTestId('vat-total');
    const totalEle = screen.queryByTestId('total');

    const plusButton = screen.queryByTestId('plus-1');
    const reduceButton = screen.queryByTestId('reduce-1');
    
    userEvent.click(plusButton);
    expect(const1Ele).toHaveTextContent('£0.52');
    expect(subTotalEle).toHaveTextContent('£0.52');
    expect(vatTotalEle).toHaveTextContent('£0.10');
    expect(totalEle).toHaveTextContent('£0.62');

    userEvent.click(plusButton);
    expect(const1Ele).toHaveTextContent('£1.04');
    expect(subTotalEle).toHaveTextContent('£1.04');
    expect(vatTotalEle).toHaveTextContent('£0.21');
    expect(totalEle).toHaveTextContent('£1.25');

    userEvent.click(reduceButton);
    expect(const1Ele).toHaveTextContent('£0.52');
    expect(subTotalEle).toHaveTextContent('£0.52');
    expect(vatTotalEle).toHaveTextContent('£0.10');
    expect(totalEle).toHaveTextContent('£0.62');
  });
});

