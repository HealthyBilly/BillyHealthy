import styled from 'styled-components';

export const ModalContainer = styled.div`
  font-family: droid-sans, sans-serif;
  color: #095256;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 500px;
  margin-top: -10px;
  border: 1px none #095256;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  z-index: 1000;
  overflow: scroll;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const CartOuterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 400px;
`;

export const CartInformationBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  display: flex;
  padding: 10px;
`;

export const CartImageBox = styled.img`
  height: 70px;
  width: 70px;
  padding: 5px;
`;

export const Remove = styled.div`
  color: #B2B7B8;
  font-size: 10;
  &:hover {
    color: #E39774;
    cursor: pointer;
  }
`;

export const CheckoutButton = styled.button`
  width: 350px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  font-size: 15px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 30px;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;

export const CloseIconStyle = styled.img`
  border: none;
  float: right;
`;