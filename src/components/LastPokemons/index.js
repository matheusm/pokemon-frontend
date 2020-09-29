import React from "react";
import "./style.css";
import PokemonCard from "../PokemonCard";

function LastPokemons() {
  return (
    <section className="lastPokemons">
      <h2 className="lastPokemonsTitle">Ultimos Pokemons</h2>
      <div className="listLastPokemons">
        <PokemonCard isSmall />
        <PokemonCard isSmall />
        <PokemonCard isSmall />
        <PokemonCard isSmall />
        <PokemonCard isSmall />
        <PokemonCard isSmall />
      </div>
    </section>
  );
}

export default LastPokemons;
