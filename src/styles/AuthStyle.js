import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: rgb(42, 42, 42);
  background: linear-gradient(
    90deg,
    rgba(42, 42, 42, 1) 0%,
    rgba(71, 70, 78, 1) 40%,
    rgba(31, 25, 130, 1) 61%,
    rgba(203, 202, 231, 1) 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 400px;
    object-fit: cover;
    opacity: 0.3;
    filter: opacity(0.4);
  }
  margin: 0 10vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 15px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 15px;
  opacity: 0.8;
`;

const Button = styled.button`
  margin-top: 15px;
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgb(187, 186, 207);
  border: none;
  border-radius: 9px;
  opacity: 0.7;
`;

const StyledLink = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;
  margin-top: 14px;
`;

export { Container, Logo, Content, Form, Input, Button, StyledLink };
