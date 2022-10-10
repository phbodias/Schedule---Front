import { useState } from "react";
import { Container, Service } from "../styles/Components/ServicesStyle";

export default function Services() {
  const [services, setServices] = useState([
    "Cabeleireiros",
    "Manicures",
    "Eletricistas",
    "Dentistas",
    "Pedreiros"
  ]);

  return (
    <Container>
      {services.map((service, key) => {
        return <Service key={key}>{service}</Service>;
      })}
    </Container>
  );
}
