import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Drivers from "./pages/drivers";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
