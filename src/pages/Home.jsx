import Footer from "../components/Footer";
import Header from "../components/Header";
import Professionals from "../components/Professionals";
import Sidebar from "../components/Sidebar";
import { Container, LeftSide, RigthSide } from "../styles/HomeStyle";

export default function Home() {
  return (
    <Container>
      <LeftSide>
        <Sidebar />
      </LeftSide>
      <RigthSide>
        <Header page="Home" />
        <Professionals />
      </RigthSide>
      <Footer />
    </Container>
  );
}
