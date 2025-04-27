import "./CSS/App.css";
import Favorites from "./Pages/Favorites";
import Home from ".src/Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./Contexts/MovieContext";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;