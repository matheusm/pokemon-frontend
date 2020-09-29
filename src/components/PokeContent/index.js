import React from "react";
import "./style.css";
import PokemonCard from "../PokemonCard";

function PokeContent(props) {
  return (
    <div className="poke-content">
      <div>
        <PokemonCard isSmall={false} title="1" />
        <PokemonCard isSmall={false} title="3" />
      </div>
      <div>
        <PokemonCard isSmall={false} title="2" />
        <PokemonCard isSmall={false} title="4" />
      </div>
      <div className="retangle-text-content">
        <h3 className="retangle-title">Teste frontend</h3>
        <p className="retangle-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
          lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec,
          venenatis dignissim suspendisse in facilisi molestie duis. Tempor sed
          quis phasellus arcu, posuere. Elementum ut tellus nisi, nunc ac etiam
          ut lectus porta. Et morbi enim vestibulum sodales sed ullamcorper
          dapibus accumsan. Faucibus pharetra, et at orci, vel blandit odio.
          Volutpat urna fusce quisque libero pellentesque in. Augue tempor vitae
          ullamcorper bibendum.<br/><br/>Quis facilisi nulla id est natoque sed ut
          consectetur. Id eleifend eros ullamcorper et. Diam, ultrices
          pellentesque urna, integer a lectus. Sit sollicitudin ac egestas amet
          netus. Elit vitae dolor cursus cursus.
        </p>
        <button className="retangle-button">CALL TO ACTION</button>
      </div>
    </div>
  );
}

export default PokeContent;
