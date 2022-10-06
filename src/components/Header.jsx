import {
  CalendarIcon,
  Container,
  InputSearch,
  UserAddress,
} from "../styles/HeaderStyle";
import { BsCalendar2Week } from "react-icons/bs";

export default function Header({ page }) {
  return (
    <Container>
      <CalendarIcon>
        <BsCalendar2Week size={50} color={"#838a94"} />
      </CalendarIcon>
      <InputSearch
        placeholder="O que você procura?"
        name="search"
      ></InputSearch>
      <UserAddress>
        <p>R. Altinópolis, 59</p>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </UserAddress>
    </Container>
  );
}
