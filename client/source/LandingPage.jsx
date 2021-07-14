import React from 'react';
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
  min-width: 100vw;
  min-height: 100vh;
`;

const AvocadoIntro = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 100vw;
  position: relative;
  background-image: url("./assets/pngAvocadoTree.jpeg");
  background-size: cover;
  height: 60vh;

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
  height: 60vh;

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
    border-radius: 5px;
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
  height: 60vh;
  background-color: #F5D5DF;

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
    border-radius: 5px;
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
    min-height: 10vh;
`;

const LandingPage = () => {
  const word = 'Convenience';
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
          <img className="farmerImage" alt="farmers" src="./assets/localFarmer.jpeg"/>
        </FarmerSection>
      </VerticalContainer>
    </>
  );
};

export default LandingPage;
