import { useState, useContext, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Cities, City, Container, Options } from "./HeaderStyle";
import CityContext from "../../contexts/cityContext";
import getCities from "../../services/getCities";

export default function Header() {
  const { city, setCity } = useContext(CityContext);
  const [showCities, setShowCities] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("actualCity", city);

  useEffect(() => {
    async function getData() {
      try {
        const promise = await getCities();
        setCities(promise.data);
        setLoading(false);
      } catch (error) {
        alert(
          `Erro ao carregar cidades: \n\n${error.response.status} - ${error.response.data}`
        );
      }
    }
    getData();
  }, []);

  function changeCity(cityToChange) {
    setCity(cityToChange);
    localStorage.setItem("citySelected", cityToChange);
  }

  return (
    <Container>
      {loading ? (
        ""
      ) : (
        <ClickAwayListener onClickAway={() => setShowCities(false)}>
          <City onClick={() => setShowCities(!showCities)}>
            <p>
              <p>{cities[city - 1].city}</p>
              {showCities ? (
                <ion-icon name="chevron-up-outline"></ion-icon>
              ) : (
                <ion-icon name="chevron-down-outline"></ion-icon>
              )}
            </p>
            {showCities ? (
              <Cities>
                {cities.map((city, index) => {
                  return (
                    <Options key={index} onClick={() => changeCity(city.id)}>
                      {city.city} - {city.States.initials}
                    </Options>
                  );
                })}
              </Cities>
            ) : (
              ""
            )}
          </City>
        </ClickAwayListener>
      )}
    </Container>
  );
}
