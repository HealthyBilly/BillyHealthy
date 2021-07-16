import React from 'react';
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

const Store = () => {
  return (
    <>
    <GreenContainer>
      <ProductSearchBar />
      <Grocery />
      <ProductPages />
    </GreenContainer>
    </>
  );
};

export default Store;