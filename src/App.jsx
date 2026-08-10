import { Routes, Route } from "react-router-dom"; // <-- Remove BrowserRouter from this import
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import Coffee from "./pages/Coffee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/coffee" element={<Coffee />} />
    </Routes>
  );
}

export default App;