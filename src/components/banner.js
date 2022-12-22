import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { container } from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={container}>
      <h1>Silbo Herreño</h1>
      <h3>Una tradición más viva que nunca</h3>
      {/* <StaticImage src="src/images/example.png" /> */}
    </div>
  );
};

export default Banner;
