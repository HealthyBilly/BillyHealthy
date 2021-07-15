import React, { useContext } from 'react';
import Styles from './Styles.jsx';
import CLeft from './CLeft/CLeft.jsx';
import CRight from './CRight/CRight.jsx';
// import CBottom from './CBottom.jsx';

const Container = {
  display:'flex',
  flexDirection:'row',
  marginTop: '3%',
  boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.3)',
}

const Calculator = () => {
  // const { Container, Row, Column } = Styles
  return(
    <div style={Container}>
      <CLeft />
      <CRight />
    </div>
  )
}

export default Calculator;