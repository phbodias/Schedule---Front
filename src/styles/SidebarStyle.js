import styled from "styled-components";

const Container = styled.div`
  width: 18vw;
  height: fit-content;
  max-height: 600px;
  background-color: hsl(240, 5%, 26%);
  border-radius: 9px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const User = styled.div`
  height: 80px;
  border-bottom: solid 1px #65656A;
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  p{
    margin: 0 10px;
  }
`

export {Container, User}
