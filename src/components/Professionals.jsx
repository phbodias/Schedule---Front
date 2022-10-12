import { useEffect, useState, useContext } from "react";
import { getProfessionals } from "../services/getProfessionalsServices";
import { Container } from "../styles/Components/ProfessionalsStyle";
import ProfessionalCard from "./ProfessionalCard";
import CityContext from "../contexts/cityContext";

export default function Professionals() {
  const { city } = useContext(CityContext);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function getProf() {
      try {
        const response = await getProfessionals(city);
        setProfessionals(response.data);
      } catch (error) {
        alert(
          `Erro ao carregar profissionais: \n\n${error.response.status} - ${error.response.data}`
        );
        //setLoading(false);
      }
    }
    getProf();
  }, [city]);

  return (
    <Container>
      {professionals.map((professional, key) => {
        return (
          <ProfessionalCard
            name={professional.name}
            pic={professional.profilePic}
            service={professional.Services.service}
            id={professional.id}
            key={key}
          />
        );
      })}
    </Container>
  );
}
