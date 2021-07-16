import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Container,
  ShipContainer,
  PaymentContainer,
  ReviewItemsContainer,
  ReviewItemsCard,
  SummaryContainer,
  Footer,
  Button
} from './CheckoutElements.js';
import { dummyData } from './dummyData.js';


const GlobalStyle = createGlobalStyle`
* {
  font-family: droid-sans, sans-serif;
  color: #095256;
}
`;

const OuterContainer = styled.div`
  background-color: #D4E7D6;
`;

// get card number and hide every digit except for the last 4
  let card = dummyData[0].cardNumber;
  let arr = [];
  for (let i = 0; i < card.length; i++) {
    if (i > card.length-5) {
      arr[i] = card.charAt([i]);
    } else {
      arr[i] = '*'
    }
  };
  arr = arr.join('');

  let itemArr = dummyData[0].cart.items
  console.log(itemArr);
  let price = 0;
  for (let i = 0; i < itemArr.length; i++) {
    price += Number(itemArr[i].price); // YAAATAAAAH
  };

  console.log(price);

  // map cart data into review item card
  let items = dummyData[0].cart.items.map((element) => (
    <ReviewItemsCard>
      <tr>
        <td><img src={element.image} className="image" /></td>
        <td><p className="name">{element.name}</p></td>
        <td>
          <div className="qty">
            <button className="decrement">-</button>
            <span>Qty: {element.quantity}</span>
            <button className="increment">+</button>
          </div>
        </td>
        <td><p className="price">price: {element.price}</p></td>
      </tr>
    </ReviewItemsCard>
  ));
/*
  General checkout page (Purpose):
    Will encompass the shipping and payment information of the client
    Will also display items that have been added into cart currently
    as well as a summary of the delivery information
*/
const Checkout = () => {
 return (
   <OuterContainer>
     <GlobalStyle />
    <Container>
      {/* TODO: Will need to make ship container into a CSS grid and add a button to change information of the client if necessary  -- COMPLETED*/}
      <ShipContainer>
        <div className="client">
          <h3 className="ShipHeader">Shipping Information: </h3>
          <h4>{dummyData[0].name}</h4>
          <span>{dummyData[0].street}</span>
          <br />
          <span>{dummyData[0].city}, {dummyData[0].state}, </span>
          <span>{dummyData[0].zipcode}</span>
        </div>
        <div className="payment">
          <h3 className="payHeader">Payment Information: </h3>
          <h4>{dummyData[0].name}</h4>
          <span className="cardNum">Card number: {arr}</span>
          <br />
          <span className="cardProv">Card Provider: {dummyData[0].provider}</span>
          <h4>Billing Address: </h4>
          <span>{dummyData[0].street}</span>
          <br />
          <span>{dummyData[0].city}, {dummyData[0].state}, </span>
          <span>{dummyData[0].zipcode}</span>
        </div>
        <div className="btn-group">
          <button className="button">Change Shipping Info</button>
          <br />
          <br />
          <button className="button">Change Payment Info</button>
        </div>
      </ShipContainer>
      {/* TODO: Flesh out ReviewItemsCard and map each item in the data to display to be rendered -- Completed*/}
      <ReviewItemsContainer>
        <h3 className="heading">Review Items: </h3>
        {items}
        <div className="totPrice">Total: {price}</div>
      </ReviewItemsContainer>
      {/* TODO: After clicking purchase
          1. Modal thanking the customer
          2. New button to be directed to homepage */}
      <Footer>
        <button className="purchase">Purchase</button>
      </Footer>
   </Container>
   </OuterContainer>
 )
};

export default Checkout;
