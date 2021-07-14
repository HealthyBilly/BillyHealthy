import React from 'react';


const button = {
  width: '25%',
  height: '30%',
  backgroundColor: 'white',
  margin: '4%',
  // border:'1px solid #095256k',
  border:'none',
  borderRadius: '10px',
  boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.3)',
  padding:'2%',
}

const img = {
  width: '50%',
  height: '50%',
}
const tag = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',

}
const Recipe = (props) => {
  const { prop } = props;
  console.log(prop,'sds')
  return (
    <button
      style={button}
      onClick={()=>{()=>{}}}
    >
      <img
        src={prop.url}
        style={img}
      />
      <h3 style={{marginTop:'5px',display:'flex', marginBottom:'-5%'}}>{prop.name}</h3>
      <p style={{display:'flex', marginBottom:'-5%'}}>{prop.description}</p>
      <div style={tag}>
        <h4>{prop.time} mins</h4>
        <h6 style={tag}>
          {prop.tag.map(i=><div style={{marginRight:'10px'}}>{i}</div>)}
        </h6>
      </div>
    </button>
  )
}

export default Recipe;


4