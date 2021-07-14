import React from 'react';
import styled from 'styled-components';
import Grocery from './grocery-details/Grocery.jsx';

export const OuterContainer = styled.div`
  background-color: #D4E7D6;
`;

const Store = () => {
  return (
    <OuterContainer>
    <Grocery />
    </OuterContainer>
  );
};

export default Store;