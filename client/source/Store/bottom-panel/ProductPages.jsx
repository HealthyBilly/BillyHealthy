import React from 'react';
import styled from 'styled-components';
import LeftIcon from './chevron-left.svg';
import RightIcon from './chevron-right.svg';

const PagePanel = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40%;
  font-family: droid-sans, sans-serif;
  font-size: 16;
  width: 150px;
  height: auto;
  padding: 10px;
  margin-bottom: 5%;
  margin-left: 45%;
`;

const ProductPageCircle = styled.div`
  border-radius: 50%;
  width: 17px;
  height: 10px;
  margin-left: 20%;
  padding-bottom: 21px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  background: #095256;
  color: #fff;
  text-align: center;
`;

const ProductPageNoCircle = styled.div`
  border-radius: 50%;
  color: #095256;
  width: 17px;
  height: 10px;
  margin-right: 15%;
  padding-bottom: 21px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  margin-left: 15%;
  text-align: center;

`;

const ProductPages = () => {
  return (
    <>
    <PagePanel>
      <img src={LeftIcon} />
      <ProductPageCircle>1</ProductPageCircle>
      <ProductPageNoCircle>2</ProductPageNoCircle>
      <img src={RightIcon} />
    </PagePanel>
    </>
  );
};


export default ProductPages;