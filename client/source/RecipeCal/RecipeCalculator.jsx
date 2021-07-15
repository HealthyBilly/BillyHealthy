import React from 'react';
import Styles from './Styles.jsx';

import Recipes from './Recipes.jsx'
import Calculator from './Calculator.jsx'
import useRC from './useRC.jsx';

export const RCContext = React.createContext();


const RecipeCalculator = () => {
  const { Container, Column } = Styles
  const a = useRC();

  return(
    <RCContext.Provider value={a}>
      <Container>
        <Column>
          <Calculator></Calculator>
          <Recipes></Recipes>
        </Column>
      </Container>
    </RCContext.Provider>
  )
}

export default RecipeCalculator;