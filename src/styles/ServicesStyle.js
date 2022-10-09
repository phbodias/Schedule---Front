import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  padding: 0 10px 10px 0;
`;

const Service = styled.div`
  width: 85%;
  height: 45px;
  margin: 3px;
  display: flex;
  align-items: center;
  padding-left: 10%;
  box-sizing: border-box;
  cursor: pointer;
  overflow-x: scroll;

  :hover {
    border-radius: 9px;
    background-color: #348DED;
  }
`;

export { Container, Service };
