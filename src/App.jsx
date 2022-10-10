import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MySchedule from "./pages/MySchedule";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<MySchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
