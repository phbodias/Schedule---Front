import { Container, InputSearch, UserAddress } from "../styles/HeaderStyle";

export default function Header({ actualPage }) {
  return (
    <Container>
      <InputSearch
        placeholder="O que você procura?"
        name="search"
      ></InputSearch>
      <UserAddress>
        {actualPage === "Home" ? <p>R. Altinópolis, 59</p> : ""}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </UserAddress>
    </Container>
  );
}
