import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  navContainer,
  image,
  links,
  scroll,
} from "./navigationbar.module.scss";

const Navigationbar = (props) => {
  console.log(props);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (props.page == "quienes") {
      setScrolled(true);
    } else {
      window.scrollY >= 380 ? setScrolled(true) : setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={scrolled ? navContainer : scroll}>
      <div className={image}>
        <StaticImage src="../images/silbo_typo_logo.png" />
      </div>
      <div className={links}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quienesSomos/">Quiénes Somos</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <img class="avatar dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="https://kitt.lewagon.com/placeholder/users/ssaunier" />
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" data-turbo-method="delete" href="#">Log out</a>
            </div>
          </li>
          <!--li class="nav-item"-->
          <!--/li--> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
