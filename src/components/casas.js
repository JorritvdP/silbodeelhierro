import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { casasContainer } from "./casas.module.scss";

const width = "150px";

const CasaImagenes = [
  <StaticImage src="../images/069-Poblado-xxxx-1024x768.jpg" width={width} />,
  <StaticImage src="../images/IMG_1309-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1310-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1312-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1315-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1327-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1332-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1334-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1337-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1338-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1339-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1347-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1348-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1356-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1360-300x225.jpg" width={width} />,
  <StaticImage src="../images/IMG_1367-300x225.jpg" width={width} />,
];

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
