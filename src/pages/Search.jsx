import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import { Container, Content } from "../styles/Pages/SearchPageStyle";

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
