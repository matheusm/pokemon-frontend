import React from "react";
import "./App.css";
import Header from "./components/Header";
import LastPokemons from "./components/LastPokemons";
import PokeContent from "./components/PokeContent";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <LastPokemons />
        <PokeContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
