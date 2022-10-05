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
} from "../styles/AuthStyle";
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
        <img src={logo} alt="logo" />
      </Logo>
      <Content>
        <Form onSubmit={handleRegister}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInputChange}
            desabilitado={loading}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInputChange}
            desabilitado={loading}
          />
          <Button type="submit">
            {loading ? (
              <ThreeDots color="#FFF" height={30} width={250} radius="10px" />
            ) : (
              <p>Log In</p>
            )}
          </Button>
        </Form>
        <StyledLink to="/signup">First time? Create an account!</StyledLink>
      </Content>
    </Container>
  );
}
