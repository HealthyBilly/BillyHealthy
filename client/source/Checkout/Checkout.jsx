import React from 'react';
import styled from 'styled-components';
import {
  Container,
  ShipContainer,
  PaymentContainer,
  ReviewItemsContainer,
  SummaryContainer,
  Footer
} from './CheckoutElements.js';

const OuterContainer = styled.div`
  background-color: #D4E7D6;
`;

const Checkout = () => {
 return (
   <OuterContainer>
    <Container>
      <ShipContainer>
        <h3 className="heading">Shipping Information: </h3>
      </ShipContainer>
      <PaymentContainer>
        <h3 className="heading">Payment Container: </h3>
      </PaymentContainer>
      <ReviewItemsContainer>
        <h3 className="heading">Review Items: </h3>
      </ReviewItemsContainer>
      <SummaryContainer>
        <h3 className="heading">Summary of Items: </h3>
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
