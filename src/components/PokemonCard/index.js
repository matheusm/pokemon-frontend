import React from "react";
import "./style.css";

function PokemonCard(props) {
  return (
    <div>
      {!props.isSmall ? (
        <h2 className="pokemonCardTitle">{props.title}</h2>
      ) : (
        ""
      )}
      <div className={props.isSmall ? "pokemonCardSmall" : "pokemonCardBigger"}>
        top
      </div>
    </div>
  );
}

export default PokemonCard;
