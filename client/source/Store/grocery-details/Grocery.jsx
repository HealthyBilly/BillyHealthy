import React from 'react';
import styled from 'styled-components';
import {
  GroceryContainer,
  GroceryBox,
  GroceryImg,
  AddToCartButton
} from './GroceryElements.js';
import { groceryDummyData } from '../GroceryDummyData.js';
import { useDispatchCart } from '../cart-modal/Cart.js';

const Grocery = () => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  let groceries = groceryDummyData.map((grocery) => {
    return <GroceryBox>
            <GroceryImg src={grocery.image}/>
            <div>{grocery.name}</div>
            <div>${grocery.price}</div>
            <AddToCartButton onClick={() => addToCart(grocery)}>Add to Cart</AddToCartButton>
          </GroceryBox>
  });

  return (
    <GroceryContainer>
      {groceries}
    </GroceryContainer>
  );
};


export default Grocery;