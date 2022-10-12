import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfessionalCard from "../components/ProfessionalCard";
import CityContext from "../contexts/cityContext";
import { getProfessionalByServices } from "../services/getProfessionalsByService";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServicePage() {
  const { serviceId } = useParams();
  const { city, setCity } = useContext(CityContext);
  const [professionals, setProfessionals] = useState(false);

  useEffect(() => {
    const promise = getProfessionalByServices(serviceId, city);

    promise
      .then((res) => {
        setProfessionals(res.data);
      })
      .catch((error) => {
        alert(
          `Erro ao carregar profissionais: \n\n${error.response.status} - ${error.response.data}`
        );
      });
  }, [city]);

  return (
    <Container>
      <Header />
      <Professionals>
        {professionals
          ? professionals.map((professional, key) => {
              return (
                <ProfessionalCard
                  name={professional.name}
                  pic={professional.profilePic}
                  service={professional.Services.service}
                  id={professional.id}
                  key={key}
                />
              );
            })
          : ""}
      </Professionals>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #1a2035;
`;

const Professionals = styled.div`
  margin-top: 120px;
  margin-bottom: 60px;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px 10px;
  box-sizing: border-box;
`;
