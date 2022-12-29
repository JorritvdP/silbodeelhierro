import React from "react";
import { footerContainer, footerLinks, footerText } from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={footerContainer}>
      <div className={footerText}>
        <p>
          Síguenos en nuestras redes sociales para estar al corriente de todas
          las novedades
        </p>
      </div>
      <div className={footerLinks}>
        <a href="https://www.instagram.com/silboherreno/" target="_blank">
          <img
            src="https://img.icons8.com/ios/50/null/instagram-new--v1.png"
            width="30px"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100063636127501"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios/50/null/facebook--v1.png"
            width="30px"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXVjbrAYN4L_wycfvS8-eaA"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/ios/50/null/youtube-play--v1.png"
            width="30px"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
