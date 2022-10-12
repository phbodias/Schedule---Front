import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Service } from "../styles/Components/ServicesStyle";
import getServices from "../services/getServices";

export default function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  function gotToServicePage(serviceId) {
    navigate(`/service`);
  }

  useEffect(() => {
    const promise = getServices();

    promise
      .then((res) => {
        setServices(res.data);
        console.log(services);
      })
      .catch((error) => {
        alert(
          `Erro ao carregar serviços: \n\n${error.response.status} - ${error.response.data}`
        );
      });
  }, []);

  return (
    <Container>
      {services.map((service, key) => {
        return (
          <Service key={key} onClick={() => navigate(`/service/${service.id}`)}>
            {service.service}
          </Service>
        );
      })}
    </Container>
  );
}
