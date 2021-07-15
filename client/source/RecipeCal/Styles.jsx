import styled from "styled-components";

const Styles = {
  Container: styled.div`
    color: #095256;
    background-color: #c4ebc8;
    padding: 3%;
    display:flex;
    justify-content:center;
    align-content:center;
    margin: -1%;

  `,
  Row: styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-content:center;

  `,
  Column: styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-content:center;
  `,
  Center: styled.div`
  display: flex;
  justify-content:center;
  `,
  Button: styled.button`
  width: 60%;
  height: 60px;
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 30px;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
  `,
  Img: styled.img`
  width: 100px,
  height: 60px;
  `,
}


export default Styles;
