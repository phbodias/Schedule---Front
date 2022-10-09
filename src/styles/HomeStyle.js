import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  background-color: #1a2035;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
`;

const LeftSide = styled.div`
  width: 20vw;
`;

const RigthSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
`;

export { Container, LeftSide, RigthSide };
