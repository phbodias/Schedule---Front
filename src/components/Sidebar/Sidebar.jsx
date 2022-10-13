import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Login, User } from "./SidebarStyle";
import Services from "../Services/Services";
import { logout } from "../../services/logout";

export default function Sidebar() {
  const [user, setUser] = useState(localStorage.getItem("userNameSchedule"));
  const [profilePic] = useState(localStorage.getItem("userPicSchedule"));

  function out() {
    setUser(false);
    logout();
  }

  return (
    <Container>
      {user ? (
        <User>
          <img src={profilePic} alt="profile" />
          <div>
            <p>Olá, {user}</p>
            <p onClick={out}>Sair</p>
          </div>
        </User>
      ) : (
        <Login>
          <ion-icon name="log-in-outline"></ion-icon>
          <Link
            to="/sign-in"
            style={{
              color: "white",
              fontSize: "20px",
              textDecoration: "underline",
              marginLeft: "5px",
            }}
          >
            Entre
          </Link>
        </Login>
      )}
      <Link
        to="/schedule"
        style={{
          color: "#ffffff",
          height: "40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <p>Minha Agenda</p>
        </div>
      </Link>
      <Services />
    </Container>
  );
}
