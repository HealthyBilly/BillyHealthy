import styled from 'styled-components';

export const GroceryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
`;

export const GroceryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-family: droid sans;
  font-color: #095256;
  background: #FFFFFF;
  height: 75px;
  width: 75px;
`;

export const GroceryImg = styled.img`
  width: 150px;
  height: 100px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  object-fit: contain;
`;

export const AddToCartButton = styled.button`
  width: 320px;
  height: 60px;
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  font-size: 30px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 30px;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;