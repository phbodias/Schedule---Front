import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const User = styled.div`
  height: 200px;
  border-bottom: solid 1px #65656a;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 100px;
    object-fit: cover;
    width: 130px;
  }

  p {
    margin-top: 20px;
  }
`;

const Scheduled = styled.div`
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Event = styled.div`
  max-width: 250px;
  margin: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  line-height: 20px;

  :hover {
    border-radius: 9px;
    background-color: #348ded;
  }
`;

export { Container, User, Scheduled, Event };
