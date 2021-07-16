import React from 'react';
import styled from 'styled-components';
import {
  TopPanelContainer,
  SearchBar,
  StyledInput,
  SearchInput,
  SearchIconImg
} from './TopPanelElements.js';
import SearchIcon from './search.svg';

const ProductSearchBar = () => {
  return (
    <TopPanelContainer>
      <form>
        <StyledInput className="inputWithIcon">
          <SearchInput
            type="text"
            placeholder="Search..."
          />
          <div className="left-icon"><SearchIconImg src={SearchIcon}/></div>
        </ StyledInput>
      </form>
    </TopPanelContainer>
  );
};


export default ProductSearchBar;