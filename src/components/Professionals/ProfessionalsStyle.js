import styled from "styled-components";

const Container = styled.div`
  margin: 100px 0;
  max-width: 80%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media(max-width: 680px){
    padding: 0;
}
`;
export { Container };
