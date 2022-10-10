import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Input,
  Button,
  StyledLink,
  Form,
  Content,
  Title,
} from "../styles/Pages/AuthStyle";

export default function SignUp() {
  //const URL = process.env.REACT_APP_URL || "AAA";
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  function signUp(){
    navigate("/sign-in")
  }

  function handleRegister(e) {
    e.preventDefault();
    //setLoading(true);
  }

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Content>
        <Title>Join us today</Title>
        <Form onSubmit={handleRegister}>
          <Input
            type="name"
            name="name"
            placeholder="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleInputChange}
          />
          <p>Foto de perfil</p>
          <Input
            type="file"
            name="profilePic"
            accept=".png, .jpg, .jpeg"
          />
          <Button type="submit">
            {loading ? (
              <ThreeDots color="#FFF" height={30} width={250} radius="10px" />
            ) : (
              <p onClick={signUp}>Sign Up</p>
            )}
          </Button>
        </Form>
        <StyledLink to="/sign-in">Already have an account? Sign In</StyledLink>
      </Content>
    </Container>
  );
}
