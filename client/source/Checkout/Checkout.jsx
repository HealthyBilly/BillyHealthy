import React from 'react';
import styled from 'styled-components';
import ReviewItemsCard from './ReviewItemsCard.jsx';
import {
  Container,
  ShipContainer,
  PaymentContainer,
  ReviewItemsContainer,
  SummaryContainer,
  Footer,
  Button
} from './CheckoutElements.js';
import {dummyData} from './dummyData.js';

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
/*
  General checkout page (Purpose):
    Will encompass the shipping and payment information of the client
    Will also display items that have been added into cart currently
    as well as a summary of the delivery information
*/
const Checkout = () => {
 return (
   <OuterContainer>
    <Container>
      {/* TODO: Will need to make ship container into a CSS grid and add a button to change information of the client if necessary  -- COMPLETED*/}
      <ShipContainer>
        <h3 className="heading">Shipping Information: </h3>
        <div className="client">
          <h4>{dummyData[0].name}</h4>
          <span>{dummyData[0].street}</span>
          <br />
          <span>{dummyData[0].city}, {dummyData[0].state}, </span>
          <span>{dummyData[0].zipcode}</span>
        </div>
        <button className="button">Change Shipping Info</button>
      </ShipContainer>
      {/* TODO: Also add a change payment method */}
      <PaymentContainer>
        <h3 className="heading">Payment Information: </h3>
        <div className="payment">
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
      </PaymentContainer>
      {/* TODO: Flesh out ReviewItemsCard and map each item in the data to display to be rendered */}
      <ReviewItemsContainer>
        <h3 className="heading">Review Items: </h3>
      </ReviewItemsContainer>
      <SummaryContainer>
        <h3 className="heading">Delivery Summary: </h3>
      </SummaryContainer>
      <Footer>
        <div className="floatcontainer">
            <button className="purchase">Purchase</button>
        </div>
      </Footer>
   </Container>
   </OuterContainer>
 )
};

export default Checkout;
