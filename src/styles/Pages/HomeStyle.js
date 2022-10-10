import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  background-color: #1a2035;
  display: flex;
  padding: 20px 0;
  box-sizing: border-box;
`;

const LeftSide = styled.div`
  width: 20vw;
  margin-left: 30px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RigthSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export { Container, LeftSide, RigthSide };
