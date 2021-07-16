import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: droid-sans, sans-serif;
  color: #095256;
}
`;
/*
Design CSS
1. Decide on how much view each section should take
2. Main column flexbox
3. Make avocado section
      a. Div of certain space with background of avocado
      b. Position text slogan div to be fixed relative to parent div
      c. Position two buttons in the center, evenly spaced apart
4. Make grocery shop section
      a. Main div row flexbox, left side 40%, right side 60%
      b. Left side Column Flexbox
          i . Big Title "Groceries and health-centered products"
          ii. Small description div below
          iii. Button "browse the shop"
5. Make diet personalization section
      a. Div column flexbox centered
      b. Title "Shop by over X diets and values"
      c. Description
      d. Buttons with diet options
      e. Map four images related to diet choice
      f. Button "Personalize your marketplace"
6. Meet the farmers section
      a. Same style as grocery shop section
          i. Meet the farmers button
Functionality
1. Avocado section
      a. Left button on click should lead to recipe calculator
      b. Right button on click should lead to grocery shop
2. Grocery shop section
      a. Button should lead to the grocery shop
3. Diet personalization section
      a. Diet buttons should map different images based on click
      b. Personalize button should save or change the diet choices in the grocery shop
4. Meet the farmers section
      a. Button should lead to meet the farmers section
*/

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D4E7D6;
  overflow: hidden;
  width: 100%;
`;

const AvocadoIntro = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 100vw;
  position: relative;
  background-image: url("./assets/pngAvocadoTree.jpeg");
  background-size: cover;
  height: 600px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);

  .text {
    position: absolute;
    color: #095256;
    font-size: 30px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  .startOptions {
    display: flex;
    min-width: 100%;
    position: absolute;
    margin: 0 -10px;
    left: 50%;
    top: 60%;
    justify-content: center;
    transform: translate(-50%, -50%);

    button {
      margin: 0px 10px;
      width: 30%;
      height: 100px;
      border: none;
      border-radius: 5px;
      color: #095256;
      background-color: #E39774;
      font-size: 30px;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
      margin: 30px;
      cursor: pointer;
      :active {
        box-shadow: none;
      }
    }
  }
  }
`;

const GroceryShop = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  height: 500px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);

  background-color: #F5D5DF;

  .groceryImage {
    position: relative;
    height: 100%;
    width: 55vw;
    object-fit: cover;
  }

  button {
    margin: 0 10px;
    width: 400px;
    height: 100px;
    border: none;
    border-radius: 10px;
    color: #095256;
    background-color: #FEDCAC;
    font-size: 30px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 30px;
    cursor: pointer;
    :active {
      box-shadow: none;
    }
  }
`;

const FarmerSection = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  height: 500px;
  background-color: #F5D5DF;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);

  .farmerImage {
    position: relative;
    height: 100%;
    width: 55vw;
    object-fit: cover;
  }


  button {
    margin: 0 10px;
    width: 400px;
    height: 100px;
    border: none;
    border-radius: 10px;
    color: #095256;
    background-color: #FEDCAC;
    font-size: 30px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 30px;
    cursor: pointer;
    :active {
      box-shadow: none;
    }
  }

`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 45%;

  h2 {
    font-size: 40px;
    margin: 10% 10% 2% 10%;
  }

  div {
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
  }

  button {
    position: absolute;
    top: 60%;
    min-width: 80%;
    margin: 0% 10% 0% 10%;
  }
`;

const Padding = styled.div`
    min-height: 15vh;
`;

const PersonalizationSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  width: 100%;
  height: 500px;
  background-color: #FEDCAC;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);


  h2 {
    // position: absolute;
    // top: 10%;
    font-size: 40px;
  }

  button {
    margin: 0 10px;
    width: 50%;
    padding: 0 10px;
    height: 100px;
    border: none;
    border-radius: 10px;
    color: #095256;
    background-color: #E39774;
    font-size: 30px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
    margin: 30px;
    cursor: pointer;
    :active {
      box-shadow: none;
    }
  }
  .description {
    margin-top: 1%;
    margin-bottom: 0%;
  }
  .prefOptions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-width: 100%;
    position: relative;
    justify-content: center;
    align-content: center;

    .imgs {
      height: 100px;
      width: 100px;
      border-radius: 5px;
      margin-left: 3.5%;
      margin-right: 3.5%;
    }

    .prefs {
      font-size: 100%;
      width: 10%;
      height: 50%;
    }
  }
`;

const dummyPreferences = ['Ketogenic', 'Organic', 'Vegan', 'Gluten-Free'];
const dummyImages = ['https://therecipecritic.com/wp-content/uploads/2017/06/0C4A8880.jpg', 'https://therecipecritic.com/wp-content/uploads/2017/06/0C4A8880.jpg', 'https://therecipecritic.com/wp-content/uploads/2017/06/0C4A8880.jpg', 'https://therecipecritic.com/wp-content/uploads/2017/06/0C4A8880.jpg'];

const mapButtons = (buttonName, index) => <button key={index} type="button" className="prefs">{buttonName}</button>;
const mapImages = (image, index) => <img alt="food" key={index} src={image} className="imgs" />;
const LandingPage = () => {
  const word = 'Convenience';
  // fill in preference options via props
  const [preferences, setPreferences] = useState([dummyImages]);

  return (
    <>
      <GlobalStyle />
      <VerticalContainer>
        <AvocadoIntro>
          <div className="text">
            {`${word} never looked so healthy`}
          </div>
          <div className="startOptions">
            <button type="button">
              Get started quick
            </button>
            <button type="button">
              Browse and shop
            </button>
          </div>
        </AvocadoIntro>
        <Padding />
        <GroceryShop>
          <Description>
            <h2>
              Groceries and health-centered products
            </h2>
            <div>
              Healthy snacks are actually a thing. You want ‘em? We’ve got em!
            </div>
            <button type="button">
              Browse the shop
            </button>
          </Description>
          <img className="groceryImage" alt="Groceries" src="./assets/groceries.jpeg" />
        </GroceryShop>
        <Padding />
        <PersonalizationSection column>
          <h2>
            Shop by over 50 diets and values
          </h2>
          <div className="description">
            Find food that meets your dietary needs and tastes amazing
          </div>
          <div className="prefOptions">
            {dummyPreferences.map(mapButtons)}
          </div>
          <div className="prefOptions">
            {dummyImages.map(mapImages)}
          </div>
          <button type="button">
            Personalize your marketplace
          </button>
        </PersonalizationSection>
        <Padding />
        <FarmerSection>
          <Description>
            <h2>
              Directly from your local farmers
            </h2>
            <div>
              Support your community and reduce emissions
              by minimizing travel distance from farm to table
            </div>
            <button type="button">
              Meet the farmers
            </button>
          </Description>
          <img className="farmerImage" alt="farmers" src="./assets/localFarmer.jpeg" />
        </FarmerSection>
        <Padding />
      </VerticalContainer>
    </>
  );
};

export default LandingPage;
