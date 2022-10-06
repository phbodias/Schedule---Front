import styled from "styled-components";

const Container = styled.header`
  width: 80vw;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  box-sizing: border-box;
`;

const InputSearch = styled.input`
  width: 30vw;
  height: 50px;
  background-color: #F0F2F5;
  border: 1px solid #E0E3E7;
  border-radius: 7px;
  padding: 20px;
  box-sizing: border-box;
  color: #838a94;
  font-size: 17px;


`;

const UserAddress = styled.div`
  display: flex;
  font-size: 17px;
  color: #838a94;

  p {
    margin-right: 7px;
  }
`;

export { Container, InputSearch, UserAddress };
