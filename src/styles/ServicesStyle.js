import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #D8D8D9;
`;

const Service = styled.div`
  width: 85%;
  height: 45px;
  margin: 3px 0;
  display: flex;
  align-items: center;
  padding-left: 15%;
  box-sizing: border-box;
  cursor: all-scroll;

  :hover {
    border-radius: 9px;
    background-color: #5A5A5E;
  }
`;

export { Container, Service };
