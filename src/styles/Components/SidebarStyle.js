import styled from "styled-components";

const Container = styled.div`
  width: 18vw;
  height: fit-content;
  max-height: 600px;
  background-color: hsl(240, 5%, 26%);
  border-radius: 9px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const Login = styled.div`
  width: 80%;
  height: 70px;
  border-bottom: solid 1px #65656a;
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  :hover {
    text-shadow: 0 0 4px #fff;
  }
`;

const User = styled.div`
  width: 80%;
  height: 80px;
  border-bottom: solid 1px #65656a;
  color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;

  img {
    width: 50px;
    object-fit: cover;
    border-radius: 100px;
  }

  p {
    margin: 0 10px;

    :nth-child(2) {
      margin-top: 3px;
      font-size: 13px;
      text-decoration: underline;
      cursor: pointer;

      :hover {
        text-shadow: 0 0 4px #fff;
        color: red;
      }
    }
  }
`;

export { Container, Login, User };
