// src/App.jsx

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orchids from "./components/Orchids";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Orchids />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
