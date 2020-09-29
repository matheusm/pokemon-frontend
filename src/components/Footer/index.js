import React from "react";
import "./style.css";

// SVGS
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import youtubeIcon from "../../assets/youtube.svg";
import logoIcon from "../../assets/logo.svg";
import menuIcon from "../../assets/icon-menu.svg";
import IconMedia from "../IconMedia";
import emailIcon from "../../assets/email.svg";
import logoYooh from "../../assets/logo-yooh.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content-top">
        <div className="footer-left-content">
          <img src={logoIcon} alt="Logo" />
        </div>
        <div className="footer-right-content">
          <div className="footer-email">
            <IconMedia icon={emailIcon} rounded={false} />
            <p className="email-footer">email@testeweb.com</p>
          </div>
          {/* Criação do array para usar os SVGS "automaticamente" */}
          <div className="footer-icons">
            {Array.of(facebookIcon, instagramIcon, youtubeIcon).map(
              (icon, index) => (
                <IconMedia icon={icon} key={index} alt={icon} rounded />
              )
            )}
          </div>
        </div>
      </div>
      <div className="footer-content-bot">
        <img src={logoIcon} alt="Logo" className="logo-footer-xs" />
        <p className="copy-footer">2020 &copy; Todos os direitos reservados.</p>
        <p className="p-footer-xs">Desenvolvido por</p>
        <img src={logoYooh} />
      </div>
    </footer>
  );
}

export default Footer;
