import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CityContext from "../../contexts/cityContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard";
import { getProfessionalByServices } from "../../services/getProfessionalsByService";
import loadingGif from "../../images/loadingGif.gif";
import { LoadingGif } from "../../styles/loadingGif";

export default function ServicePage() {
  const { serviceId } = useParams();
  const { city } = useContext(CityContext);
  const [loading, setLoading] = useState(true);
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        const promise = await getProfessionalByServices(serviceId, city);
        setProfessionals(promise.data);
        setLoading(false);
      } catch (error) {
        alert(
          `Erro ao carregar profissionais: \n\n${error.response.status} - ${error.response.data}`
        );
      }
    }
    get();
  }, [city]);

  return (
    <>
      {loading ? (
        <LoadingGif>
          <img src={loadingGif} />
        </LoadingGif>
      ) : (
        <Container>
          <Header />
          <Professionals>
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
          </Professionals>
          <Footer />
        </Container>
      )}
    </>
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
