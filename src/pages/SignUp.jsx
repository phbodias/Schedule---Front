import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import signUpService from "../services/signup";
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

export default function SignUp() {
  
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  function handleRegister(e) {
    e.preventDefault();

    const promise = signUpService(data);

    promise
      .then((res) => {
        navigate("/sign-in");
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
        <Title>Junte-se a nós</Title>
        <Form onSubmit={handleRegister}>
          <Input
            type="name"
            name="name"
            placeholder="nome"
            value={data.name}
            onChange={handleInputChange}
            disabled={loading}
            required
          />
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
          <Input
            type="url"
            name="profilePic"
            placeholder="url foto de perfil"
            value={data.profilePic}
            onChange={handleInputChange}
            disabled={loading}
          />
          <Button type="submit">
            {loading ? (
              <ThreeDots color="#FFF" height={30} width={250} radius="10px" />
            ) : (
              <p onSubmit={handleRegister}>Cadastrar</p>
            )}
          </Button>
        </Form>
        <StyledLink to="/sign-in">Já possui uma conta? Faça login</StyledLink>
      </Content>
    </Container>
  );
}
