import { useEffect, useState, useContext } from "react";
import { getMany } from "../services/getProfessionalsServices";
import { Container } from "../styles/Components/ProfessionalsStyle";
import ProfessionalCard from "./ProfessionalCard";
import CityContext from "../contexts/cityContext";

export default function Professionals() {
  const { city } = useContext(CityContext);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    const promise = getMany(city);

    promise
      .then((res) => {
        setProfessionals(res.data);
        console.log(professionals);
      })

      .catch((error) => {
        alert(
          `Erro ao carregar profissionvcais: \n\n${error.response.status} - ${error.response.data}`
        );
        //setLoading(false);
      });
  }, [city]);

  return (
    <Container>
      {professionals.map((professional, key) => {
        return (
          <ProfessionalCard
            name={professional.name}
            pic={professional.profilePic}
            service={professional.Services.service}
            key={key}
          />
        );
      })}
    </Container>
  );
}
