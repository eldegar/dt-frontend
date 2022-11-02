import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drivers from "./pages/drivers";
import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
