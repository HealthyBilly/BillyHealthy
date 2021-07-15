import React from 'react';


const button = {
  width: '25%',
  height: '30%',
  backgroundColor: 'white',
  margin: '4%',
  border:'1px solid #095256',
  borderRadius: '10px',
  boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.3)',
}

const img = {
  width: '50%',
  height: '50%',
  paddingTop:'1%',
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
      <h2 style={{marginTop:'5px',display:'flex', marginBottom:'-5%'}}>{prop.name}</h2>
      <p style={{display:'flex', marginBottom:'-5%'}}>{prop.description}</p>
      <div style={tag}>
        <h3>{prop.time} mins</h3>
        <h5 style={tag}>
          {prop.tag.map(i=><div style={{marginRight:'10px'}}>{i}</div>)}
        </h5>
      </div>
    </button>
  )
}

export default Recipe;


4