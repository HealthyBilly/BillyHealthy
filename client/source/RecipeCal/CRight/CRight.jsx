import React, { useContext } from 'react';

import { RCContext } from '../RecipeCalculator.jsx';

// import Styles from './Styles.jsx';
import useRC from '../useRC.jsx';
import NumSelectButton from './NumSelectButton.jsx';
import MealType from './MealType.jsx';

const Container = {
  backgroundColor:'#F9F9F9',
  width:'50%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  alignContent:'center',
};

const title = {
  display: 'flex',
  justifyContent:'center',
};

const button = {
  width: '60%',
  height: '60px',
  border: 'none',
  borderRadius: '5px',
  color: '#095256',
  backgroundColor: '#fedcac',
  boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.3)',
  marginBottom: '5%',
  marginTop:'-5%',
  cursor: 'pointer',
}

const CRight = () => {
  // const { Container } = Styles
  const NoPList = [1,2,4];
  const RPWList = [2,3,4,5,6];
  const { nop, setNop, rpw, setRpw, preference,obj } = useContext(RCContext);

  return(
    <div style={Container}>
      <h2 style={title}>Customize your plan</h2>
      <NumSelectButton
        list={NoPList}
        text={'Number of People'}
        func={setNop}
        clicked={nop}
      />
      <NumSelectButton
        list={RPWList}
        text={'Recipes per Week'}
        func={setRpw}
        clicked={rpw}
      />
      <MealType preference={preference} nop={nop} rpw={rpw} />
      <div style={{display:'flex', justifyContent:'center'}}>
         <button style={button}>Select this plan</button>
      </div>

    </div>
  )
}

export default CRight;