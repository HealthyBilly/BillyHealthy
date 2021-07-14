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
  console.log('dummyData', groceryDummyData)
  let groceries = groceryDummyData.map((grocery) => {
    return <GroceryBox>
            <GroceryImg src={grocery.image}/>
            <div>{grocery.name}</div>
            <div>{grocery.price}</div>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </GroceryBox>
  });

  return (
    <GroceryContainer>
      {groceries}
    </GroceryContainer>
  );
};


export default Grocery;