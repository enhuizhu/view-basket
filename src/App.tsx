import React from 'react';
import { Header } from './components/Header';
import { BasketContext } from './contexts'
import { useBasket } from './hooks';
import { Divider } from './components/Divider'
import { Panel } from './components/Panel';
import { ProductsTable } from './components/ProductsTable';
import { StyledContainer } from './App.style';

function App() {
  const basket = useBasket();
  
  return (
    <BasketContext.Provider value={{...basket}}>
      <StyledContainer>
        <Header/>
        <Divider />
        <Panel title="Review Your Order">
          <ProductsTable />
        </Panel>
      </StyledContainer>
    </BasketContext.Provider>
  );
}

export default App;
