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
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 2fr 3fr 3fr 0.5fr;
`;

export const ShipContainer = styled.div`
  grid-area: ShipContainer;
  display: grid;
  grid-template-areas:
    'heading client button';
  grid-template-columns: 1fr 1fr 1fr;
  background: white;
  margin: 30px 30px 20px 30px;
  padding: 10px;
  border-radius: 20px;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  .heading {
    text-decoration: underline;
    margin-left: 10px;
  }
  .client {
    text-align: left;
    margin-top: 20px;
    font-size: 20px;
  }
  .button {
    border: none;
    background: transparent;
    color: blue;
    text-decoration: underline;
    margin-bottom: 150px;
    margin-left: 150px;
    :hover {
      cursor: pointer;
    }
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
  .payment {
    margin-left: 25px;
    font-size: 18px;
  }
`;

export const ReviewItemsContainer = styled.div`
  grid-area: ReviewItemsContainer;
  background: white;
  margin-right: 30px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  overflow-y: scroll;
  .heading {
    text-decoration: underline;
    margin-left: 10px;
  }
  .image{
    width: 100%
    max-width: 100px;
    max-height: 100px;
    padding: 10px;
    object-fit: cover;
  }
`;

export const ReviewItemsCard = styled.table`
  table-layout: fixed;
  width: 800px;
  .image{
    width: 80px;
    height: 80px;
    padding: 10px;
    object-fit: cover;
    float: left;
    clear: left;
  }
  .info{
    margin-left: 25px;
    margin-top: 28px;
  }
  .name {
    max-width: 100px;
    overflow: hidden;
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
  .purchase {
    background-color: #F5D5DF;
    padding: 20px 50px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    transition: all 0.2s ease-in-out;
    :hover {
      cursor: pointer;
      background: #FEDCAC;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: blue;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;