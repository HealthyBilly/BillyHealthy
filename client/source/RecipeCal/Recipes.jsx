import React from 'react';
import styled from "styled-components";
import { DataRecipe } from './dummyData.js';
import Recipe from './Recipe/Recipe.jsx';


const container ={
  display:'flex',
  flexDirection:'row',
}

const ontainer = styled.div`
  display: flex;
  flex-direction:row;
`;

const Recipes = () => {
  // const { Container } = Styles
  console.log(DataRecipe[0])
  return(

    <div>
      {DataRecipe.map(i => {
        return (
          <React.Fragment key={i.key}>
            <Recipe prop={i} />
          </React.Fragment>)}
        )
      }
    </div>
  )
}

export default Recipes;