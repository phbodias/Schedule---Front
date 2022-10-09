import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

const Service = styled.div`
  width: 85%;
  height: 45px;
  margin: 3px 0;
  display: flex;
  align-items: center;
  padding-left: 15%;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    border-radius: 9px;
    background-color: #348DED;
  }
`;

export { Container, Service };
