import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  Input,
  Button,
  StyledLink,
  Form,
  Logo,
  Content,
  Title,
} from "../styles/AuthStyle";
import { BsCalendar2Date } from "react-icons/bs";
import logo from "../images/Logo.png";

export default function SignIn() {
  //const URL = process.env.REACT_APP_URL || "AAA";

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
  }

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Logo>
        <BsCalendar2Date color="#2a2a2a" size={150} />
      </Logo>
      <Content>
        <Title>Welcome</Title>
        <Form onSubmit={handleRegister}>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleInputChange}
            desabilitado={loading}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleInputChange}
            desabilitado={loading}
          />
          <Button type="submit">
            {loading ? (
              <ThreeDots color="#FFF" height={30} width={250} radius="10px" />
            ) : (
              <p>Sign In</p>
            )}
          </Button>
        </Form>
        <StyledLink to="/signup">First time? Create an account!</StyledLink>
      </Content>
    </Container>
  );
}
