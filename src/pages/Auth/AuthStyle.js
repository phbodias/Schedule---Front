import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../images/background.png";

const Container = styled.div`
  background-image: url("${background}");
  background-position: center;
  object-fit: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  min-width: 300px;
  height: 600px;
  border-radius: 20px;
  background-color: lightgray;
  opacity: 0.9;
`;

const Title = styled.div`
  font-size: 35px;
  margin-bottom: 30px;
  color: grey;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 17px;
  border-radius: 7px;
  border: none;
`;

const ShowPass = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  position: relative;

  input {
    width: 100%;
  }

  p {
    position: absolute;
    right: 15px;
    top: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;
    border-left: 1px solid black;
    padding-left: 3px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #036aca;
  color: #fff;
  border: none;
  border-radius: 9px;
  font-size: 15px;
`;

const StyledLink = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-decoration-line: underline;
  color: grey;
  margin-top: 14px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin-bottom: 5px;
  color: red;
`

export { Container, Content, Title, Form, Input, ShowPass, Button, StyledLink, ErrorMessage };
