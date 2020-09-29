import React, { useState, useEffect } from "react";
import { pokeDetail } from "../../services/api";

import "./style.css";

function PokemonCard(props) {
  const [pokemonDetail, setPokemonDetail] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      if (props.pokeName !== undefined) {
        const { data } = await pokeDetail(props.pokeName).get();
        setPokemonDetail(data.sprites.front_default);
      }
    }
    loadPokemon();
  }, [props.pokeName]);

  const CapitalizeName = (pokeName) => {
    return pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
  };

  return (
    <div>
      {!props.isSmall ? (
        <h2 className="pokemonCardTitle">{CapitalizeName(props.pokeName)}</h2>
      ) : (
        ""
      )}
      <div className={props.isSmall ? "pokemonCardSmall" : "pokemonCardBigger"}>
        <img
          src={pokemonDetail}
          className={!props.isSmall ? "imagePokeBigger" : "imagePokeSmall"}
        />
        <p>{props.isSmall ? CapitalizeName(props.pokeName) : ""}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
