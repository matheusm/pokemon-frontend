import React from "react";
import Slider from "react-slick";
import PokemonCard from "../PokemonCard";

import "./style.css";

export default function SlideCard(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const name = ["pikachu", "ivysaur", "bulbasaur", "charizard"];

  return (
    <>
      {props.getWindowSize < 1311 ? (
        <div className="cardForFullScreen">
          <Slider {...settings}>
            {name.map((pokeName) => (
              <div>
                <PokemonCard pokeName={pokeName} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="cardForSmallScreen">
          <PokemonCard isSmall={false} pokeName="pikachu" />
          <PokemonCard isSmall={false} pokeName="bulbasaur" />
          <PokemonCard isSmall={false} pokeName="ivysaur" />
          <PokemonCard isSmall={false} pokeName="charizard" />
        </div>
      )}
    </>
  );
}
