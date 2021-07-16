import styled from 'styled-components';

export const GroceryContainer = styled.div`
  font-family: droid-sans, sans-serif;
  color: #095256;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 3%;
`;

export const GroceryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background: #FFFFFF;
  border-radius: 10px;
  padding-bottom: 5px;
  margin: 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;

export const GroceryImg = styled.img`
  width: 120px;
  height: 130px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  object-fit: contain;
`;

export const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  font-size: 15px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 10px;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;