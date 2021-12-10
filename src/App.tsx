import React from 'react';
import { Header } from './components/Header';
import { BasketContext } from './contexts'
import { useBasket } from './hooks';
import { Divider } from './components/Divider'
import { Panel } from './components/Panel';
import { ProductsTable } from './components/ProductsTable';
import { CostSummary } from './components/CostSummary';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { StyledContainer } from './App.style';

function App() {
  const basket = useBasket();

  return (
    <BasketContext.Provider value={{...basket}}>
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <Header/>
          <Divider />
          <Panel title="Review Your Order">
            <ProductsTable />
          </Panel>
          <Divider />
          <CostSummary />
        </StyledContainer>
      </ThemeProvider>
    </BasketContext.Provider>
  );
}

export default App;
