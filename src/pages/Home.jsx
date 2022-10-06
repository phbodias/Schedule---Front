import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Container } from "../styles/HomeStyle";

export default function Home() {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Header page="Home" />
    </Container>
  );
}
