import styled from "styled-components";

const Styles = {};

Styles.smallButton = styled.button`
  width: 320px;
  height: 60px;
  border: none;
  border-radius: 5px;
  color: #095256;
  background-color: #fedcac;
  font-size: 30px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3);
  margin: 30px;
  cursor: pointer;
  :active {
    box-shadow: none;
  }
`;

Styles.mediumButton = styled.button``;

Styles.largeButton = styled.button``;

export default Styles;
