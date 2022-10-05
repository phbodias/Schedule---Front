import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Sign";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
