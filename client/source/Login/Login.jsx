import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding-left:30%;
  padding-right:30%;
  background-color: rgba(196, 235, 200, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;

  * {
    font-family: droid-sans, sans-serif;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin-top: 25%;
  margin-bottom: 30%;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-right:15%;
  padding-left:15%;

`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  font-size: 30px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 5%;
  margin-bottom: 0%;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;

const LIorSUcon = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const LIorSU = styled.button`
  border: none;
  width:45%;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  font-size: 30px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;

const ClickedLIorSU = styled.button`
  border: none;
  width:45%;
  border-radius: 5px;
  color: #095256;
  background-color: white;
  font-size: 30px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;

const Login = () => {
  const [clicked, setClicked] = useState('Login');
  const handleClickedLIorSU = (event) => {
    setClicked(event.target.innerText)
  }
  return(
    <div>
      <Container>
        <LoginContainer>
          <LIorSUcon>
          {clicked === 'Login'?
            <>
              <ClickedLIorSU onClick={handleClickedLIorSU}>Login</ClickedLIorSU>
              <LIorSU onClick={handleClickedLIorSU}>Sign up</LIorSU>
            </>
            :
            <>
              <LIorSU onClick={handleClickedLIorSU}>Login</LIorSU>
              <ClickedLIorSU onClick={handleClickedLIorSU}>Sign up</ClickedLIorSU>
            </>
          }
          </LIorSUcon>
          <Button>Login with Facebook</Button>
          <Button>Login with Google</Button>
          <Button>Login with email</Button>
        </LoginContainer>
      </Container>
    </div>
  )
}

export default Login;