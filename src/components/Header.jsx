import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import {
  Cities,
  City,
  Container,
  InputSearch,
  Options,
} from "../styles/Components/HeaderStyle";

export default function Header() {
  const [showCities, setShowCities] = useState(false);
  const [actualCity, setActualCity] = useState("Campinas - SP");
  const cities = ["Rio de Janeiro - RJ", "São Paulo - SP", "Brasília - DF"];

  return (
    <Container>
      <InputSearch
        placeholder="O que você procura?"
        name="search"
      ></InputSearch>
      <ClickAwayListener onClickAway={() => setShowCities(false)}>
        <City onClick={() => setShowCities(!showCities)}>
          <p>
            <p>{actualCity}</p>
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
                  <Options key={index} onClick={() => setActualCity(`${city}`)}>
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
