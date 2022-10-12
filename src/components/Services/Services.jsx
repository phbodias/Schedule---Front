import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Service } from "./ServicesStyle";
import getServices from "../../services/getServices";

export default function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  function gotToServicePage(serviceId) {
    navigate(`/service`);
  }

  useEffect(() => {
    async function getData() {
      try {
        const promise = await getServices();
        setServices(promise.data);
        setLoading(false);
      } catch (error) {
        alert(
          `Erro ao carregar serviços: \n\n${error.response.status} - ${error.response.data}`
        );
      }
    }
    getData();
  }, []);

  return (
    <Container>
      {loading ? "": (
        services.map((service, key) => {
          return (
            <Service
              key={key}
              onClick={() => navigate(`/service/${service.id}`)}
            >
              {service.service}
            </Service>
          );
        })
      )}
    </Container>
  );
}
