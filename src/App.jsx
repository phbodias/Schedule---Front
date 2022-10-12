import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CityContext from "./contexts/cityContext";
import GlobalStyle from "./styles/Global/globalStyles";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Search from "./pages/Search/Search";
import MySchedule from "./pages/MySchedule/MySchedule";
import ServicePage from "./pages/Service/ServicePage";

function App() {
  const [city, setCity] = useState(
    localStorage.getItem("citySelected") || "Campinas"
  );

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/schedule" element={<MySchedule />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </CityContext.Provider>
  );
}

export default App;
