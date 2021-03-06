import React from 'react';

const Container ={
  width:'70%',
  height: '60%',
  border: '1px solid #095256',
  borderRadius: '5px',
  margin: '10%',
  marginTop:'5%',
  paddingLeft: '5%',
  paddingRight: '5%',
  backgroundColor:'rgba(224, 224, 224, 0.2)',
  overflow:'hidden',
  display:'flex',
  justifyContent:'space-between',
  flexDirection:'column',
}

const topContainer = {
  width:'95%',
  borderBottom: '1px solid #095256',
}

const textContainer = {
  display:'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  marginBottom: '-5%',
}

const priceContainer ={
  display:'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
}

const bottomContainer = {
  backgroundColor:'rgba(197, 212, 212, 0.5)',
  marginRight: '-10%',
  marginLeft: '-10%',
  display:'flex',
  flexDirection:'row',
  paddingLeft:'5%',
  paddingRight: '5%',
  justifyContent:'space-between',
  borderRadius:'5px',
}
const MealType = (props) => {
  const { preference, nop, rpw, list, discount} =props;
  let price;
  if(list.length > 0){
    const listarray = list.map(i=>Number(i.price));
    price = listarray.reduce((a,b)=>a+b);
  } else {
    price = 4;
  }
  const afterDiscount = Math.floor(price * ( (100 - discount) / 100 ) * 100)/100;

  const ship = 10;
  const afterShipping = 0;

  const total = Math.floor(nop * rpw * afterDiscount * 100 + afterShipping * 100) /100;
  return (
    <div style={Container}>
      <div style={topContainer}>
        {preference ? <h3>{preference}</h3> : <h3>Meal Type</h3>}
        {rpw && nop? <h3>{`${rpw} meals for ${nop} people per week`}</h3>: null}
      </div>
      {rpw && nop ?
        <>
        <div style={textContainer}>
          <h3>Box price</h3>
          <h3>{`$ ${Math.floor(price/rpw*100)/100}`}</h3>
        </div>
        <div style={textContainer}>
          <h3>Price per serving</h3>
          <div style={priceContainer}>
            <h3 style={{textDecoration: 'line-through',color: 'grey'}}>{`$ ${price}`}</h3>
            <h3 style={{marginLeft:'10px', color:'red'}}>{`$ ${afterDiscount}`}</h3>
          </div>
        </div>
        <div style={textContainer}>
          <h3>Shipping</h3>
          <div style={priceContainer}>
            <h3 style={{textDecoration: 'line-through',color: 'grey'}}>{`$ ${ship}`}</h3>
            <h3 style={{marginLeft:'10px',color:'red'}}>{afterShipping === 0?'Free':`$ ${afterDiscount}`}</h3>
          </div>
        </div>
        </>
      : null}
      <div style={bottomContainer}>
        <h2>Total</h2>
        <h2>{`$ ${total}`}</h2>
      </div>
    </div>
  )
}

export default MealType;