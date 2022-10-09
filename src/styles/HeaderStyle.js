import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  width: 62%;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  box-sizing: border-box;
  transition: all 1s ease-out;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-sizing: border-box;
`;

const InputSearch = styled.input`
  width: 30vw;
  height: 50px;
  background-color: #f0f2f5;
  border: 1px solid #e0e3e7;
  border-radius: 7px;
  padding: 20px;
  box-sizing: border-box;
  color: #838a94;
  font-size: 17px;
`;

const UserAddress = styled.div`
  display: flex;
  font-size: 17px;
  color: #f0f2f5;

  p {
    margin-right: 7px;
  }
`;

export { Container, InputSearch, UserAddress };
