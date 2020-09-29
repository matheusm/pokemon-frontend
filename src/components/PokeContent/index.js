import React, { useState, useEffect } from "react";

import LastPokemons from "../LastPokemons";
import pikachuIcon from "../../assets/pikachu.svg";
import pokeball from "../../assets/pokerbola.svg";
import SlideCard from "../SlideCard";
import useWindowSize from "../../hooks/useWindowSize";

import { api } from "../../services/api";

import "./style.css";

function PokeContent(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const size = useWindowSize();

  useEffect(() => {
    async function loadPokemon() {
      const { data } = await api.get();
      setPokemonData(data.results);
    }
    loadPokemon();
  }, []);

  return (
    <div className="poke-content">
      <LastPokemons pokeCards={pokemonData} />
      <SlideCard getWindowSize={size.width} />
      <div>
        <div className="retangle-text-content">
          <h3 className="retangle-title">Teste frontend</h3>
          <p className="retangle-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a
            lacus, aliquam mattis est enim, molestie diam. Consequat blandit
            nec, venenatis dignissim suspendisse in facilisi molestie duis.
            Tempor sed quis phasellus arcu, posuere. Elementum ut tellus nisi,
            nunc ac etiam ut lectus porta. Et morbi enim vestibulum sodales sed
            ullamcorper dapibus accumsan. Faucibus pharetra, et at orci, vel
            blandit odio. Volutpat urna fusce quisque libero pellentesque in.
            Augue tempor vitae ullamcorper bibendum.
            <br />
            <br />
            Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend
            eros ullamcorper et. Diam, ultrices pellentesque urna, integer a
            lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor
            cursus cursus.
          </p>
          <button className="retangle-button">CALL TO ACTION</button>
        </div>
        <div className="pikachu-image">
          <img src={pokeball} />
          <img src={pikachuIcon} />
        </div>
      </div>
    </div>
  );
}

export default PokeContent;
