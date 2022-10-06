import styled from "styled-components";

const Container = styled.header`
  width: 80vw;
  height: 80px;
  position: fixed;
  right: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  box-sizing: border-box;
  border: 1px solid black;
`;

const CalendarIcon = styled.div`
  transform: rotate(-35deg);
`;

const InputSearch = styled.input`
  width: 30vw;
  height: 50px;
  background-color: #021b32;
  border: none;
  border-radius: 7px;
  padding: 20px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 17px;

  ::placeholder {
    color: #838a94;
  }
`;

const UserAddress = styled.div`
  display: flex;
  font-size: 17px;
  color: #838a94;

  p {
    margin-right: 7px;
  }
`;

export { Container, CalendarIcon, InputSearch, UserAddress };
