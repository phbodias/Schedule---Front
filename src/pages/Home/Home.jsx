import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Professionals from "../../components/Professionals/Professionals";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, LeftSide, RigthSide } from "./HomeStyle";

export default function Home() {
  return (
    <Container>
      <LeftSide>
        <Sidebar />
      </LeftSide>
      <RigthSide>
        <Header />
        <Professionals />
      </RigthSide>
      <Footer actualPage={"Home"} />
    </Container>
  );
}
