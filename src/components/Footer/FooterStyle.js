import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #1a2035;
  border-top: solid 1px #E8E8E8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 30px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    p{
        font-size: 10px;
    }
  }

  @media(min-width: 1024px){
    display: none;
  }
`;

export { Container };
