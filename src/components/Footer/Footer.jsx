import { Container } from "./FooterStyle";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../services/logout";
import { useState } from "react";

export default function Footer({ actualPage }) {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(localStorage.getItem("userNameSchedule"));

  function out() {
    setUser(false);
    logout();
    navigate("/");
  }

  return (
    <Container navigate>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div>
          {actualPage === "Home" ? (
            <ion-icon name="home"></ion-icon>
          ) : (
            <ion-icon name="home-outline"></ion-icon>
          )}
          <p>Home</p>
        </div>
      </Link>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <div>
          {actualPage === "Search" ? (
            <ion-icon name="search"></ion-icon>
          ) : (
            <ion-icon name="search-outline"></ion-icon>
          )}
          <p>Buscar</p>
        </div>
      </Link>
      <Link to="/schedule" style={{ textDecoration: "none" }}>
        <div>
          {actualPage === "Schedule" ? (
            <ion-icon name="calendar-clear-sharp"></ion-icon>
          ) : (
            <ion-icon name="calendar-clear-outline"></ion-icon>
          )}
          <p>Agenda</p>
        </div>
      </Link>
      {user ? (
        <div onClick={out}>
          <ion-icon name="log-out-outline"></ion-icon>
          <p>Sair</p>
        </div>
      ) : (
        <Link to="/sign-in" style={{ textDecoration: "none" }}>
          <div>
            <ion-icon name="log-in-outline"></ion-icon>
            <p>Entrar</p>
          </div>
        </Link>
      )}
    </Container>
  );
}
