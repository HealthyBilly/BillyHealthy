import React, { useContext } from 'react';
import styled from "styled-components";
import { DataRecipe } from './dummyData.js';
import Recipe from './Recipe/Recipe.jsx';

import { RCContext } from './RecipeCalculator.jsx';

const container ={
  display:'flex',
  flexDirection:'row',
}

const Container = styled.div`
  display: flex;
  flex-direction:row;
`;

const Recipes = () => {
  // const { Container } = Styles
  const { list } = useContext(RCContext)
  const mapRecipe = (i) =>(
    <React.Fragment key={i.id}>
      <Recipe prop={i} />
    </React.Fragment>
  )

  return(
    <>
      <Container>
        {list.slice(0,3).map(mapRecipe)}
      </Container>
      <Container>
        {list.slice(3).map(mapRecipe)}
      </Container>
    </>
  )
}

export default Recipes;