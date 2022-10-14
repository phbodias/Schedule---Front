import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: solid 1px #e8e8e8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 30px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.8);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;

    p {
      font-size: 10px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export { Container };
