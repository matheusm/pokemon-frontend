import React, { useState } from "react";

import charizard from "../../assets/charizard.png";
import buttonLeft from "../../assets/button-left.svg";
import buttonRight from "../../assets/button-right.svg";

import useWindowSize from "../../hooks/useWindowSize";

import "./style.css";

function Banner() {
  const [banner, setBanner] = useState(true);
  const size = useWindowSize();

  const changeBannerState = (prevState) => {
    setBanner((prevState) => !banner);
  };

  return (
    <div className="banner">
      <div
        className="pokemon-banner"
        style={
          banner
            ? { backgroundColor: " rgb(255 208 41)" }
            : { backgroundColor: " rgb(24, 151, 255)" }
        }
      >
        {size.width > 1126 ? (
          <img
            src={buttonLeft}
            className="button-to-change"
            onClick={changeBannerState}
          />
        ) : (
          ""
        )}
        <div className="container-banner">
          <div className="content">
            <div className="left-content">
              <h4>Faça seu teste</h4>
              <h1> {banner ? "De frontend" : "Outro Banner"}</h1>
              <span>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </span>
              <button className="button-banner">CALL TO ACTION</button>
            </div>
            <div className="right-content">
              <img src={charizard} className="image-pokemon" />
            </div>
          </div>
          {size.width < 1126 ? (
            <div className="button-small-screen">
              <img
                src={buttonLeft}
                className="button-to-change-bottom"
                onClick={changeBannerState}
              />
              <img
                src={buttonRight}
                className="button-to-change-bottom"
                onClick={changeBannerState}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {size.width > 1126 ? (
          <img
            src={buttonRight}
            className="button-to-change"
            onClick={changeBannerState}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Banner;
