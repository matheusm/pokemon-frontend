import React from "react";
import PokemonCard from "../PokemonCard";

import "./style.css";

function LastPokemons(props) {
  return (
    <section className="lastPokemons">
      <h2 className="lastPokemonsTitle">Ultimos Pokemons</h2>
      <div className="listLastPokemons">
        {props.pokeCards.map((poke) => (
          <PokemonCard isSmall pokeName={poke.name} />
        ))}
      </div>
    </section>
  );
}

export default LastPokemons;
