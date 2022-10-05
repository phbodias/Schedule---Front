import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(30, 42, 40, 1) 0%,
    rgba(17, 32, 41, 1) 8%,
    rgba(17, 32, 41, 1) 92%,
    rgba(30, 42, 40, 1) 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  margin: -150px -30px 0 0;
  transform: rotate(315deg); /* Equal to rotateZ(45deg) */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  width: 250px;
  height: 400px;
  z-index: 1;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 35px;
  color: grey;
  margin: -30px 0 40px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  margin-bottom: 15px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 15px;
  opacity: 0.8;
`;

const Button = styled.button`
  margin-top: 15px;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgb(187, 186, 207);
  border: none;
  border-radius: 9px;
  opacity: 0.4;
`;

const StyledLink = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-decoration-line: underline;
  color: lightblue;
  margin-top: 14px;
`;

export { Container, Logo, Content, Title, Form, Input, Button, StyledLink };
