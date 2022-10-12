import { Container, Content } from "./SearchPageStyle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";

export default function Search() {
  return (
    <Container>
      <Header actualPage={"Search"} />
      <Content>
        <Services />
      </Content>
      <Footer actualPage={"Search"}></Footer>
    </Container>
  );
}
