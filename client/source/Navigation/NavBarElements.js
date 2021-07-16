import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #FFFFFF;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
  z-index: 98;
`;

export const NavLink = styled(Link)`
  font-family: droid-sans, sans-serif;
  color: #095256;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-right: 2.5rem;
  margin-top: 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none !important;
  &.active {
    color: #E39774;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavBtnLink = styled(Link)`
  font-family: droid-sans, sans-serif;
  border-radius: 4px;
  background: #F5D5DF;
  padding: 10px 22px;
  color: #095256;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FEDCAC;
  }
`;

export const HealthyLogo = styled.img.attrs({
  src: '../../../assets/HealthyFoodIncLogo.png'
})`
  display: flex;
  align-self: flex-start;
  width: 150px;
  height: 100px;
  margin-left: -70px;
  margin-top: 5px;
  margin-bottom: 5px;
  object-fit: contain;
  float: left;
`;

// Cart Icon Styling
export const CartIconBox = styled.div`
  width: 150px;
  height: 150px;
  padding: 10px;
`;

export const CartCountCircle = styled.div`
  font-family: droid-sans, sans-serif;
  font-size: 11;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-top: -25px;
  margin-left: 35px;
  padding-top: 2px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  background: #E39774;
  color: #fff;
  text-align: center;
  z-index: 100;
  position: absolute;
`;

export const CartImgStyle = styled.img`
  width: 50px;
  height: 50px;
  z-index: 99
  position: relative;
`;