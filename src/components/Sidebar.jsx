import { Container, User } from "../styles/SidebarStyle";
import { FaUserCircle } from "react-icons/fa";
import Services from "./Services";

export default function Sidebar() {
  return (
    <Container>
      <User>
        <FaUserCircle size={40} color={"#ffffff"}/>
        <p>Olá, Pedro</p>
      </User>
      <Services/>
    </Container>
  );
}
