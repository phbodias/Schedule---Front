import styled from "styled-components";

const Card = styled.div`
  width: 230px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 9px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  margin: 10px;
  font-size: 17px;
  cursor: pointer;

  img {
    height: 50px;
    object-fit: cover;
    border-radius: 21px;
  }

  div {
    margin-left: 10px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  p:nth-child(2) {
    color: #348ded;
    font-size: 12px;
  }

  :hover {
    background-color: hsl(240, 5%, 26%);
  }
`;

export { Card };
