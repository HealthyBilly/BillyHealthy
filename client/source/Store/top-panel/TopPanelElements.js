import styled from 'styled-components';

// Search Bar

export const TopPanelContainer = styled.div`
  font-family: droid-sans, sans-serif;
  font-color: #095256;
  font-size: 12px;
  display: flex;
  margin-left: 15%;
  margin-right: 10%;
  margin-top: 3%;
`;

export const SearchInput = styled.input`
  height: 50px;
  font-size: 15px;
  color: #095256;
  width: 100%;
  border: 2px solid #B2B7B8;
  border-radius: 40px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: pointer;

  &:focus {
    border-color: #FEDCAC;
    box-shadow: 0 0 8px 0 #FEDCAC;
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    top: 25px;
    transform: translateY(-50%);
    svg {
      fill: #B2B7B8;
      transition: 0.3s;
    }
  }
`;

export const SearchIconImg = styled.img`
  padding-top: 15px;
  padding-left: 20px;
`;

// Drop Down
export const DropDownButton = styled.div`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: white;
  font-size: 15px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 10px;
  cursor: pointer;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;