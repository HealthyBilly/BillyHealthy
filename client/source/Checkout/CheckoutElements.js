import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: grid;
  grid-gap: 10px;
  justify-content: space-between;
  grid-template-areas:
    'ShipContainer    ShipContainer'
    'PaymentContainer ReviewItemsContainer'
    'SummaryContainer SummaryContainer'
    'Footer           Footer';
  grid-template-columns: 4fr 5fr;
  grid-template-rows: 2fr 3fr 3fr 0.5fr;
`;

export const ShipContainer = styled.div`
  grid-area: ShipContainer;
  background: white;
  margin: 30px 30px 20px 30px;
  padding: 10px;
  border-radius: 20px;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  .heading {
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const PaymentContainer = styled.div`
  grid-area: PaymentContainer;
  background: white;
  margin: 0px 20px 0px 30px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  .heading {
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const ReviewItemsContainer = styled.div`
  grid-area: ReviewItemsContainer;
  background: white;
  margin-right: 30px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  .heading {
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const SummaryContainer = styled.div`
  grid-area: SummaryContainer;
  background: white;
  margin: 20px 30px 5px 30px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  .heading {
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const Footer = styled.div`
  grid-area: Footer;
  margin-right: 30px;
  margin-left: 30px;
  .floatcontainer {
    float: right;
  }
  .button {
    
  }
`;