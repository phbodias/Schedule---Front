import { useEffect, useState, useContext } from "react";
import { getProfessionals } from "../../services/getProfessionalsServices";
import { Container } from "./ProfessionalsStyle";
import ProfessionalCard from "../ProfessionalCard/ProfessionalCard";
import Context from "../../contexts/Context";
import { LoadingGif } from "../../styles/loadingGif";
import loadingGif from "../../images/loadingGif.gif";

export default function Professionals() {
  const { city } = useContext(Context);
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProf() {
      try {
        const response = await getProfessionals(city);
        setProfessionals(response.data);
        setLoading(false);
      } catch (error) {
        alert(
          `Erro ao carregar profissionais: \n\n${error.response.status} - ${error.response.data}`
        );
      }
    }
    getProf();
  }, [city]);

  return (
    <Container>
      {loading ? (
        <LoadingGif>
          <img src={loadingGif} alt="loading" />
        </LoadingGif>
      ) : (
        professionals.map((professional, key) => {
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
      )}
    </Container>
  );
}
