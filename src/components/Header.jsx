import { useState, useContext } from "react";
import ClickAwayListener from "react-click-away-listener";
import {
  Cities,
  City,
  Container,
  InputSearch,
  Options,
} from "../styles/Components/HeaderStyle";
import CityContext from "../contexts/cityContext";

export default function Header() {
  const { city, setCity } = useContext(CityContext);
  const [showCities, setShowCities] = useState(false);
  const cities = ["Campinas", "São Paulo", "Rio de Janeiro", "Brasília"];

  function changeCity(cityToChange) {
    setCity(cityToChange);
    localStorage.setItem("citySelected", cityToChange);
  }

  return (
    <Container>
      <InputSearch
        placeholder="O que você procura?"
        name="search"
      ></InputSearch>
      <ClickAwayListener onClickAway={() => setShowCities(false)}>
        <City onClick={() => setShowCities(!showCities)}>
          <p>
            <p>{city}</p>
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
                  <Options key={index} onClick={() => changeCity(city)}>
                    {city}
                  </Options>
                );
              })}
            </Cities>
          ) : (
            ""
          )}
        </City>
      </ClickAwayListener>
    </Container>
  );
}
