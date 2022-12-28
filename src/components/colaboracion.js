import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { colaboracionContainer, imagenes } from "./colaboracion.module.scss";

const Colaboracion = () => {
  const width = "145px";
  const height = "100%";
  return (
    <div className={colaboracionContainer}>
      <h3>Con la Colaboración de</h3>
      <div className={imagenes}>
        <StaticImage
          src="../images/la-frontera_escudonv.png"
          width={width}
          height={height}
          objectFit="contain"
        />
        <StaticImage
          src="../images/El_Pinar_de_El_Hierro.png"
          width={width}
          height={height}
          objectFit="contain"
        />
        <StaticImage
          src="../images/escudo_valverde1.png"
          width={width}
          height={height}
          objectFit="contain"
        />
        <StaticImage
          src="../images/cabildo.png"
          width={width}
          height={height}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Colaboracion;
