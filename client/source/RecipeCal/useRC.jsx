import React, { useState, useEffect } from 'react';

const useRC = () => {
  const [preference, setPreference] = useState('keto');
  const [nop, setNop] = useState('');
  const [rpw, setRpw] = useState('2');
  const [list, setList] = useState([]);

  useEffect(()=>{
    let pref= preference.split('-');
    if (pref.length !== 1) {
      pref = pref[0].toLowerCase().concat(pref[1]);
    } else if (preference ==='whole 30') {
      pref ='whole30'
    } else {
      pref = preference.toLowerCase();
    }
    fetch(`http://localhost:3001/getrecipes/${pref}/${rpw}`,{
      mode:'cors'
    })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setList(data)
      })
      .catch(console.log)
  },[preference, rpw])

  const obj = {
    preference:preference,
    nop:nop,
    rpw:rpw,
  }
  return ({
    obj,
    preference,
    nop,
    rpw,
    list,
    setList,
    setPreference,
    setNop,
    setRpw,
  })
}

export default useRC;
