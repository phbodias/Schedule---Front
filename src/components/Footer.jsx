import { Container } from "../styles/Components/FooterStyle";
import { Link } from "react-router-dom";

export default function Footer({ actualPage }) {
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
      <div>
        <ion-icon name="log-out-outline"></ion-icon>
        <p>Sair</p>
      </div>
    </Container>
  );
}
