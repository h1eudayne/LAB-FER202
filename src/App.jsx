// src/App.jsx

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Orchids from "./components/Orchids";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Navigation />
      <Orchids />
    </ThemeProvider>
  );
}

export default App;
