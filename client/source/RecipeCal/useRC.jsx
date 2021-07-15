import React, { useState } from 'react';

const useRC = () => {
  const [preference, setPreference] = useState('');
  const [nop, setNop] = useState('');
  const [rpw, setRpw] = useState('');
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
    setPreference,
    setNop,
    setRpw,
  })
}

export default useRC;
