import { Container, Login, User } from "../styles/Components/SidebarStyle";
import { Link, useNavigate } from "react-router-dom";
import Services from "./Services";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("userNameSchedule"));
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("userPicSchedule")
  );

  function logout() {
    localStorage.removeItem("tokenSchedule");
    setUser(false);
    localStorage.removeItem("userNameSchedule");
    localStorage.removeItem("userPicSchedule");
  }

  return (
    <Container>
      {user ? (
        <User>
          <img src={profilePic} alt="profile" />
          <div>
            <p>Olá, {user}</p>
            <p onClick={logout}>Sair</p>
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
      <Services />
    </Container>
  );
}
