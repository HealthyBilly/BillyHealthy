import React from 'react';

const button = {
  width: '30%',
  height: '20%',
  backgroundColor: 'white',
  margin: '5%',
  border:'1px solid #095256',
  overflow:'hidden',
  borderRadius: '5px',
  boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.3)',
}

const buttonClicked = {
  width: '30%',
  height: '20%',
  backgroundColor: '#FEDCAC',
  margin: '5%',
  border:'1px solid #095256',
  borderRadius: '5px',
}

const img = {
  width: '50%',
  height: '50%',
  paddingTop:'10%',
}

const ImageButton = (props) => {
  const { prop, func, isClicked } = props;

  return (
    <button
      style={isClicked === true? buttonClicked: button}
      onClick={()=>{func(prop.name)}}
    >
      <img
        src={prop.url}
        style={img}
      />
      <p style={{marginTop:'5px'}}>{prop.name}</p>
    </button>
  )
}

export default ImageButton;