import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./pages/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
