import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { casasContainer } from "./casas.module.scss";

const Casas = () => {
  return (
    <div className={casasContainer}>
      <h2>La isla de El Hierro</h2>
      <p>
        Descubre las tradicionales casas de roca volcánica con techados de
        madera de sabina.
      </p>
    </div>
  );
};

export default Casas;
