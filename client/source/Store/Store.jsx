import React from 'react';
import styled from 'styled-components';
import Grocery from './grocery-details/Grocery.jsx';

export const GreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D4E7D6;
  flex-grow: 1;
  height: 100%;
  margin-left: -8px;
  margin-right: -8px;
  margin-top: 10px;
`;

const Store = () => {
  return (
    <GreenContainer>
    <Grocery />
    </GreenContainer>
  );
};

export default Store;