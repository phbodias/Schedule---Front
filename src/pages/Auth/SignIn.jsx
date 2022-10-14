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
  ErrorMessage,
} from "./AuthStyle";
import signInService from "../../services/signin";
import { signinSchema } from "../../validations/authSchemas";

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [sendError, setSendError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

    const isValid = await signinSchema.isValid(data);
    if (isValid) {
      const promise = signInService(data);

      promise
        .then((res) => {
          localStorage.setItem("tokenSchedule", res.data.token);
          localStorage.setItem("userNameSchedule", res.data.user.name);
          localStorage.setItem("userPicSchedule", res.data.user.profilePic);
          navigate("/");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            setSendError("Preencha os dados corretamente.");
          } else if (error.response.status === 401) {
            setSendError("Email ou senha incorretos");
          } else if (error.response.status === 404) {
            setSendError("Você ainda não possui uma conta, faça seu cadastro.");
          } else {
            alert(error.response);
          }
          setLoading(false);
        });
    } else {
      setSendError("Preencha os dados corretamente.");
      setLoading(false);
    }
  }

  function handleInputChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Content>
        <Title>Bem vindo</Title>
        <Form onSubmit={handleRegister}>
          <ErrorMessage>
            {sendError !== "" && !loading ? <p>{sendError}</p> : ""}
          </ErrorMessage>
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
              placeholder="senha (min: 6 caracteres)"
              value={data.password}
              onChange={handleInputChange}
              disabled={loading}
              required
            />
            {data.password.length > 0 && !loading ? (
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
