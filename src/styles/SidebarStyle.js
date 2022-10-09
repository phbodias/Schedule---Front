import styled from "styled-components";

const Container = styled.div`
  width: 18vw;
  height: 93vh;
  max-height: 600px;
  background-color: hsl(240, 5%, 26%);
  border-radius: 9px;
  position: fixed;
`;

const User = styled.div`
  height: 80px;
  border-bottom: solid 1px #65656A;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #ffffff;
  margin-bottom: 20px;

  p{
    margin-left: 10px;
  }
`

export {Container, User}
