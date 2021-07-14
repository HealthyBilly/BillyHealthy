import React, { useContext } from 'react';

// import Styles from './Styles.jsx';
import { DataImageButton } from '../dummyData.js';

import { RCContext } from '../RecipeCalculator.jsx';

import ImageButton from './ImageButton.jsx';
import useRC from '../useRC.jsx';

const Container = {
  backgroundColor:'#F9F9F9',
  width:'50%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'flex-start',
  borderRight: '0.5px dashed #095256 ',
};

const title = {
  display: 'flex',
  justifyContent:'center',
}

const ImageButtonContainer = {
  padding: '15%',
  paddingTop: '0%'
}

const CLeft = () => {
  // const RCcontext = useContext(RCContext);
  const { preference, setPreference, obj } = useContext(RCContext);

  return(
    <div style={Container}>
      <h2 style={title}>Choose your preference</h2>
      <div style={ImageButtonContainer}>
        {DataImageButton.map(i => (
          <React.Fragment key={i.id}>
            <ImageButton
              func={setPreference}
              isClicked={preference === i.name? true:false}
              prop={i}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default CLeft;