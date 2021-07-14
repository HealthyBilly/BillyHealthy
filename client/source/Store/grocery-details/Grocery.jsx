import React from 'react';
import styled from 'styled-components';
import {
  GroceryContainer,
  GroceryBox,
  GroceryImg,
  AddToCartButton
} from './GroceryElements.js';
import { groceryDummyData } from '../GroceryDummyData.js';

const Grocery = () => {
  console.log('Dummy Data', groceryDummyData);
  return (
    <GroceryContainer>
      Groceries
    </GroceryContainer>
  );
};


export default Grocery