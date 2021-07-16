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
  z-index: 99;
`;

export const NavLink = styled(Link)`
  font-family: droid-sans, sans-serif;
  color: #095256;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-right: 2rem;
  margin-top: 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none !important;
  &.active {
    color: #E39774;
  }
  border: solid green 1px;
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
  border: none;
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
  margin-left: -85px;
  margin-top: 5px;
  margin-bottom: 5px;
  object-fit: contain;
  float: left;
`;