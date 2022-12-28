import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  silbadoresContainer,
  silbadores,
  silbador,
} from "./silbadores.module.scss";

const width = "130px";

const Silbadores = (src) => {
  // const [ portraits, setPortraits ] = useState(silbadores)
  const style = {
    backgroundImage: `url('${src}')`,
  };

  return (
    <div className={silbadoresContainer}>
      <div className={silbador} style={style}></div>
    </div>
  );
};

export default Silbadores;
