import { useState, useContext, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Cities, City, Container, Mode, Options } from "./HeaderStyle";
import Context from "../../contexts/Context";
import getCities from "../../services/getCities";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export default function Header() {
  const { city, setCity, mode, setMode } = useContext(Context);
  const [showCities, setShowCities] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  function changeMode() {
    setMode(mode === "dark" ? "light" : "dark");
    localStorage.setItem("mode", mode);
  }

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
          <div>
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
            <Mode onClick={changeMode}>
              {mode === "dark" ? <BsToggle2On /> : <BsToggle2Off />}
            </Mode>
          </div>
        </ClickAwayListener>
      )}
    </Container>
  );
}
