import * as React from "react";
import { StaticImage, getSrcSet } from "gatsby-plugin-image";
import {
  silbadoresContainer,
  silbadores,
  silbador,
} from "./silbadores.module.scss";

const width = "130px";

function Silbadores(props) {
  // const [ portraits, setPortraits ] = useState(silbadores)
  const src = props.silbador.src;
  const alt = props.silbador.alt;
  console.log(typeof src);
  console.log(typeof alt);
  const style = {
    backgroundImage: `url('${src}')`,
    // backgroundSize: "cover",
  };

  return (
    <div className={silbador} style={style}>
      {/* <img src={src} alt={alt} /> */}
    </div>
  );
}

export default Silbadores;
