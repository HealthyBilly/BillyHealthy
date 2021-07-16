import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Modal from './Modal.jsx';
import { NavLink as Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getFirebase from '../firebase/firebaseIndex.js';


const Container = styled.div`
  width: 40%;
  height: 100%;
  padding-left:30%;
  padding-right:30%;
  background-color: rgba(196, 235, 200, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: droid-sans, sans-serif;
  color: #095256;
`;

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25%;
  margin-bottom: 30%;
  background-color: white;
  flex-direction: column;
  // justify-content: center;
  // align-content: center;
  padding-right:15%;
  padding-left:15%;

`;
// const Button = styled.button`
//   border: none;
//   border-radius: 5px;
//   color: #095256;
//   background-color: #fedcac;
//   font-size: 30px;
//   box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
//   margin: 5%;
//   margin-bottom: 0%;
//   cursor: pointer;
//   :active {
//     box-shadow: none;
//   }
// `;

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

const Header = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 8px;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const FacebookButton = styled(Button)`
  background-color: #3B5998;
  color: white;
  margin-left: 0;
`;

const GoogleButton = styled(Button)`
  opacity: 0.5;
  // background-color: #dd4b39;
  background-color: light grey;
  color: black;
  margin-right: 0;
`;

const Divider = styled.hr`
  // border: 1px solid black;
  color: black;
`;

const Input = styled.input`
width: 100%;
padding: 12px;
border: 1px solid black;
border-radius: 4px;
margin: 0px;
opacity: 0.85;
display: inline-block;
// font-size: 17px;
line-height: 20px;
text-decoration: none;
`;

const Title = styled.h3`
  margin: 0px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const Form = styled.form`
  width: 100%;

`;

const Submit = styled(Input)`
  cursor: pointer;
  color: #095256;
  border-radius: 4px;
  background: #F5D5DF;
  padding: 10px 22px;
  outline: none;
  border: none;
  margin-top: 30px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #FEDCAC;
  }
  font-size: 15px;
`;

const SignLogInLink = styled(Link)`
  font-size: 15px;
`;


// const signUp = async (event) => {
//   event.preventDefault();

//   try {
//     if (firebaseInstance) {
//       const user = await firebaseInstance.auth().createUserWithEmailAndPassword(email.value, password.value)
//       console.log("user", user)
//       alert(`Welcome ${email.value}!`);
//     }
//   } catch (error) {
//     console.log("error", error);
//     alert(error.message);
//   }
// };


const Login = () => {
  const [clicked, setClicked] = useState('Login');
  const handleClickedLIorSU = (event) => {
    setClicked(event.target.innerText)
    setShowModal(true);
  }

  const firebaseInstance = getFirebase();

  var togglePassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div>
      <Container>
        <LoginContainer>
          <Header>Sign Up With</Header>
          <ButtonContainer>

            <FacebookButton>
              Facebook
            </FacebookButton>
            <GoogleButton>Google</GoogleButton>

          </ButtonContainer>
          {/* <Form> */}
          <form method="post" onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            console.log(email);
            console.log(password);

            try {
              if (firebaseInstance) {
                firebaseInstance.auth().createUserWithEmailAndPassword(email, password)
                  .then(res => {
                    console.log('signed up!');
                    console.log(res)
                    alert(`Welcome ${email}!`);
                  })
                  .catch(err => {
                    alert(err);
                  })

              }
            } catch (error) {
              console.log("error", error);
              alert(error.message);
            }
          }}>
            <Title>Email</Title>
            <Input name="email" id="email" type="text" required="required"></Input>
            <Title>Password</Title>
            <Input name="password" id="password" type="password" required="required"></Input>
            <div>
              <input type="checkbox" onClick={togglePassword}></input>
              <span>Show Password</span>
            </div>

            <Submit type="submit"></Submit>
          </form>

          {/* </Form> */}

          {/* <div>

          </div> */}
          <SignLogInLink to='/login'>Already a member? Log in now</SignLogInLink>


        </LoginContainer>
      </Container>
    </div>
  )

  // return(
  //   <div>
  //     <Container>
  //       <LoginContainer>
  //         <LIorSUcon>
  //         {clicked === 'Login'?
  //           <>
  //             <ClickedLIorSU onClick={handleClickedLIorSU}>Login</ClickedLIorSU>
  //             <LIorSU onClick={handleClickedLIorSU}>Sign up</LIorSU>
  //           </>
  //           :
  //           <>
  //             <LIorSU onClick={handleClickedLIorSU}>Login</LIorSU>
  //             <ClickedLIorSU onClick={handleClickedLIorSU}>Sign up</ClickedLIorSU>
  //           </>
  //         }
  //         </LIorSUcon>

  //         {showModal ?
  //           <Modal handleClose={closeModal}>

  //           </Modal>
  //           :
  //           <></>
  //         }


  //         {/* <StyledModal
  //           isOpen={showModal}
  //           contentLabel="Modal test">
  //             Hi
  //         </StyledModal> */}

  //         <Button>Login with FaceBook</Button>
  //         <Button>Login with Google</Button>
  //         <Button>Login with Email</Button>
  //       </LoginContainer>
  //     </Container>
  //   </div>
  // )
}

export default Login;