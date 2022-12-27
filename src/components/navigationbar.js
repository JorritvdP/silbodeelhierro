import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { navContainer, image, links } from "./navigationbar.module.scss";

const Navigationbar = () => {
  return (
    <div className={navContainer}>
      <div className={image}>
        <StaticImage src="../images/silbo_typo_logo.png" />
      </div>
      <div className={links}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contacto</a>
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
