import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a2035;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const Content = styled.div`
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Container, Content };
