import React from 'react';

const Container = {
  display:'flex',
  width: '90%',
  height: '50px',
  paddingRight: '5%',
  paddingLeft: '5%',
  backgroundColor:'#F9F9F9',
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
}

const h4 = {
  width:'36%',
}

const buttonContainer = {
  width:'54%',
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
}

const doubleline= {
  border:'0.5px solid #095256',
}
const button = {
  width:'100%',
  color:'#095256',
  marginTop:'10px',
  marginBottom:'10px',
  border:'0.5px solid #095256',
  backgroundColor: 'white',
  borderRadius:'3px',
}

const buttonClicked = {
  width:'100%',
  marginTop:'10px',
  border:'0.5px solid #095256',
  color:'#095256',
  marginBottom:'10px',
  backgroundColor: '#FEDCAC',
  borderRadius:'3px',
}

const NumSelectButton = (props) => {
  const { list, func, clicked,text } = props;
  return (
    <div style={Container}>
      <h4 style={h4}>{text}</h4>
      <div style={buttonContainer}>
          {list.map(i =>
            <React.Fragment key={i}>
              <button
                style={ clicked === i? buttonClicked : button }
                onClick={()=>func(i)}
              >
                {i}
              </button>
            </React.Fragment>
          )}
      </div>
    </div>
  )
}

export default NumSelectButton;