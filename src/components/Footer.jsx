import { Container } from "../styles/FooterStyle";

export default function Footer() {
  return (
    <Container>
      <div>
        <ion-icon name="home-outline"></ion-icon>
        <p>Home</p>
      </div>
      <div>
        <ion-icon name="search-outline"></ion-icon>
        <p>Buscar</p>
      </div>
      <div>
        <ion-icon name="calendar-clear-outline"></ion-icon>
        <p>Agenda</p>
      </div>
    </Container>
  );
}
