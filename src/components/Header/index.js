import React from "react";
import "./style.css";

// SVGS
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import youtubeIcon from "../../assets/youtube.svg";
import logoIcon from "../../assets/logo.svg";
import menuIcon from "../../assets/icon-menu.svg";
import IconMedia from "../IconMedia";

function Header() {
  return (
    <header className="header">
      <div className="header-left-content">
        <img src={menuIcon} className="menu-icon" alt="Logo" />

        <img src={logoIcon} alt="Logo" />
      </div>
      <div className="header-right-content">
        <button className="button-action">CALL TO ACTION</button>
        {/* Criação do array para usar os SVGS "automaticamente" */}
        {Array.of(facebookIcon, instagramIcon, youtubeIcon).map(
          (icon, index) => (
            <IconMedia icon={icon} key={index} alt={icon} rounded />
          )
        )}
      </div>
    </header>
  );
}

export default Header;
