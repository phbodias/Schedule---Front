import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Service = styled.div`
  width: 100%;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  overflow-x: scroll;

  :hover {
    border-radius: 9px;
    background-color: #348ded;
  }
`;

export { Container, Service };
