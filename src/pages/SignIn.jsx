import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  Input,
  Button,
  StyledLink,
  Form,
  Content,
  Title,
  ShowPass,
} from "../styles/Pages/AuthStyle";
import signInService from "../services/signin";

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

    const promise = signInService(data);

    promise
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("tokenSchedule", res.data.token);
        localStorage.setItem("tuserSchedule", res.data.user);
        navigate("/");
      })
      .catch((error) => {
        alert(
          `Erro ao cadastrar: \n\n${error.response.status} - ${error.response.data}`
        );
        setLoading(false);
      });
  }

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Content>
        <Title>Bem vindo</Title>
        <Form onSubmit={handleRegister}>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
          <ShowPass>
            <Input
              type={showPass && !loading ? "text" : "password"}
              name="password"
              placeholder="senha"
              value={data.password}
              onChange={handleInputChange}
              disabled={loading}
              required
            />
            {data.password.length && !loading > 0 ? (
              <p onClick={() => setShowPass(!showPass)}>
                {showPass ? (
                  <ion-icon name="eye-off-outline"></ion-icon>
                ) : (
                  <ion-icon name="eye-outline"></ion-icon>
                )}
              </p>
            ) : (
              ""
            )}
          </ShowPass>
          <Button type="submit">
            {loading ? (
              <ThreeDots color="#FFF" height={30} width={250} radius="10px" />
            ) : (
              <p onSubmit={handleRegister}>Entrar</p>
            )}
          </Button>
        </Form>
        <StyledLink to="/sign-up">Primeira vez? Crie sua conta</StyledLink>
      </Content>
    </Container>
  );
}
