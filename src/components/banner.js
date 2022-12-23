import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { bannerContainer } from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={bannerContainer}>
      <h1>Silbo Herreño</h1>
      <h3>Una tradición más viva que nunca</h3>
    </div>
  );
};

export default Banner;
