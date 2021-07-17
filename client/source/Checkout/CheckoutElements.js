import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100%;
  display: grid;
  grid-gap: 10px;
  margin-left: 15%;
  margin-right: 15%;
  grid-template-areas:
    'ShipContainer        ShipContainer'
    'ReviewItemsContainer ReviewItemsContainer'
    'Footer               Footer';
  grid-template-rows: 3fr 5fr 3fr;
`;

export const ShipContainer = styled.div`
  grid-area: ShipContainer;
  display: grid;
  grid-template-areas:
    'client payment btn-group';
  grid-template-columns: 1fr 1fr 1fr;
  background: white;
  margin: 30px 30px 20px 30px;
  padding: 10px;
  border-radius: 20px;
  min-width: 100px;
  box-shadow:  0 3px 10px rgb(0 0 0 / 0.3);
  .client {
    text-align: left;
    margin-left: 20px;
  }
  .payment {
    margin-left: 100px;
    padding-bottom: 30px;
  }
  .btn-group {
    border: none;
    background: transparent;
    transition: all 0.2s ease-in-out;
    margin-left: 30%;
    margin-top: 25px;
    .button {
      background: transparent;
      border: none;
      color: #087f8C;
      :hover {
        cursor: pointer;
        color: #095256;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const ReviewItemsContainer = styled.div`
  grid-area: ReviewItemsContainer;
  display: flex;
  flex-direction: column;
  background: white;
  max-height: 86%;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  .heading {
    margin-left: 30px;
    margin-top: 30px;
  }
  .image {
    width: 100%
    max-width: 100px;
    max-height: 100px;
    padding: 10px;
    object-fit: cover;
  }
  .totPrice {
    background-color: rgba(197, 212, 212, 0.5);
    padding-right: 18%;
    text-align: right;
  }
`;

export const ReviewItemsCard = styled.table`
  table-layout: fixed;
  margin-left: 15%;
  margin-right: 15%;
  width: 80%;
  .image{
    width: 80px;
    height: 80px;
    padding: 10px;
    object-fit: cover;
    float: left;
  }
  .decrement{
    background: transparent;
    border: none;
    font-size: 20px;
    margin-top: 5px;
    margin-right: 3px;
    :hover {
      cursor: pointer;
    }
  }
  .increment{
    background: transparent;
    border: none;
    font-size: 15px;
    :hover {
      cursor: pointer;
    }
  }
  .name {
    max-width: 100px;
    overflow: hidden;
  }
  .price{
  }

`;

export const Footer = styled.div`
  grid-area: Footer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 80px;
  .purchase {
    background-color: #F5D5DF;
    margin-left: 20%;
    margin-right: 20%;
    padding: 20px 100px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    transition: all 0.2s ease-in-out;
    font-size: 18px;
    :hover {
      cursor: pointer;
      background: #FEDCAC;
      transition: all 0.2s ease-in-out;
    }
  }
`;
