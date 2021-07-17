import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import Grocery from './grocery-details/Grocery.jsx';
import ProductSearchBar from './top-panel/ProductSearchBar.jsx';
import ProductPages from './bottom-panel/ProductPages.jsx';

export const GreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D4E7D6;
  flex-grow: 1;
  width: 100%;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: 10px;
`;

const GroceryComponent = React.lazy(()=>import('./grocery-details/Grocery.jsx'));

const Store = () => {
  return (
    <>
    <GreenContainer>
      <ProductSearchBar />
      <Suspense fallback={<div>Loading...</div>}>
        <GroceryComponent />
      </Suspense>
      <ProductPages />
    </GreenContainer>
    </>
  );
};

export default Store;