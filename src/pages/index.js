import * as React from "react";
import Banner from "../components/banner";
import Silbadores from "../components/silbadores";
import Navigationbar from "../components/navigationbar";
import Casas from "../components/casas";
import Testimonios from "../components/testimonios";
import Colaboracion from "../components/colaboracion";
import { container, silbadores } from "../components/index.module.scss";

const IndexPage = () => {
  const portraits = [
    {
      title: "Vitoriano-Fidel-Padron-Gonzalez",
      src: "../images/Vitoriano-Fidel-Padron-Gonzalez.jpg",
      alt: "Vitoriano-Fidel-Padron-Gonzalez",
    },
    {
      title: "Vidal Acosta Gutierrez",
      src: "../images/Vidal-Acosta-Gutierrez.jpg",
      alt: "Vidal-Acosta-Gutierrez",
    },
    {
      title: "Adela Padron Perez",
      src: "../images/Adela-Padron-Perez.jpg",
      alt: "Adela-Padron-Perez",
    },
    {
      title: "Andres Gonzalez Padron",
      src: "../images/Andres-Gonzalez-Padron.jpg",
      alt: "Andres-Gonzalez-Padron",
    },
    {
      title: "Antonio Morales Morales",
      src: "../images/Antonio-Morales-Morales-2.jpg",
      alt: "Antonio-Morales-Morales",
    },
    {
      title: "Aurelio Cabrera Acosta",
      src: "../images/Aurelio-Cabrera-Acosta-2.jpg",
      alt: "Aurelio-Cabrera-Acosta",
    },
    {
      title: "Benito Armas Hernandez",
      src: "../images/Benito-Armas-Hernandez-2.jpg",
      alt: "Benito-Armas-Hernandez",
    },
    {
      title: "Carlos Alberto Gutierrez Sanchez",
      src: "../images/Carlos-Alberto-Gutierrez-Sanchez-2.jpg",
      alt: "Carlos-Alberto-Gutierrez-Sanchez",
    },
    {
      title: "Emiliano Fernandez Armas",
      src: "../images/Emiliano-Fernandez-Armas.jpg",
      alt: "Emiliano-Fernandez-Armas",
    },
    {
      title: "Esteban Padron Quintero",
      src: "../images/Esteban-Padron-Quintero.jpg",
      alt: "Esteban-Padron-Quintero",
    },
    {
      title: "Felix Zamora Gutierrez",
      src: "../images/Felix-Zamora-Gutierrez.jpg",
      alt: "Felix-Zamora-Gutierrez",
    },
    {
      title: "Fernando Padron Casanas",
      src: "../images/Fernando-Padron-Casanas-2.jpg",
      alt: "Fernando-Padron-Casanas",
    },
    {
      title: "Francisco Armas Gonzalez",
      src: "../images/Francisco-Armas-Gonzalez.jpg",
      alt: "Francisco-Armas-Gonzalez",
    },
    {
      title: "Francisco Quintero Morales",
      src: "../images/Francisco-Quintero-Morales.jpg",
      alt: "Francisco-Quintero-Morales",
    },
    {
      title: "Lorenzo Cabrera Acosta",
      src: "../images/IMG-20210814-WA0038-768x1024.jpg",
      alt: "Lorenzo-Cabrera-Acosta",
    },
    {
      title: "Jose Luis Acosta Castaneda",
      src: "../images/Jose-Luis-Acosta-Castaneda-2.jpg",
      alt: "Jose-Luis-Acosta-Castaneda",
    },
    {
      title: "Juan Francisco Quintero Padron",
      src: "../images/Juan-Francisco-Quintero-Padron-2-683x1024.jpg",
      alt: "Juan-Francisco-Quintero-Padron",
    },
    {
      title: "Juan Francisco Quintero Perez",
      src: "../images/Juan-Francisco-Quintero-Perez.jpg",
      alt: "Juan-Francisco-Quintero-Perez",
    },
    {
      title: "Lalo Fonte Armas",
      src: "../images/Lalo-Fonte-Armas-2.jpg",
      alt: "Lalo-Fonte-Armas",
    },
    {
      title: "Manuel Padron Quintero",
      src: "../images/Manuel-Padron-Quintero-2.jpg",
      alt: "Manuel-Padron-Quintero",
    },
    {
      title: "Maria Reyes Gutierrez Quintero",
      src: "../images/Maria-Reyes-Gutierrez-Quintero.jpg",
      alt: "Maria-Reyes-Gutierrez-Quintero",
    },
    {
      title: "Pablo Martin Zamora",
      src: "../images/Pablo-Martin-Zamora-2.jpg",
      alt: "Pablo-Martin-Zamora",
    },
    {
      title: "Pedro Machin Padron",
      src: "../images/Pedro-Machin-Padron-2.jpg",
      alt: "Pedro-Machin-Padron",
    },
    {
      title: "Rafael-Castaneda-Rodriguez",
      src: "../images/Rafael-Castaneda-Rodriguez-2.jpg",
      alt: "Rafael-Castaneda-Rodriguez",
    },
    {
      title: "Ramon Angel Mendez Padron",
      src: "../images/Ramon-Angel-Mendez-Padron-2.jpg",
      alt: "Ramon-Angel-Mendez-Padron",
    },
    {
      title: "Remedios Morales Gonzalez",
      src: "../images/Remedios-Morales-Gonzalez-2.jpg",
      alt: "Remedios-Morales-Gonzalez",
    },
    {
      title: "Rosario-Morales-Gonzalez",
      src: "../images/Rosario-Morales-Gonzalez-2.jpg",
      alt: "Rosario-Morales-Gonzalez",
    },
    {},

    // <StaticImage
    //   src="../images/Vitoriano-Fidel-Padron-Gonzalez.jpg"
    //   alt="Vitoriano-Fidel-Padron-Gonzalez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Vidal-Acosta-Gutierrez.jpg"
    //   alt="Vidal-Acosta-Gutierrez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Adela-Padron-Perez.jpg"
    //   alt="Adela-Padron-Perez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Andres-Gonzalez-Padron.jpg"
    //   alt="Andres-Gonzalez-Padron"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Antonio-Morales-Morales-2.jpg"
    //   alt="Antonio-Morales-Morales"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Aurelio-Cabrera-Acosta-2.jpg"
    //   alt="Aurelio-Cabrera-Acosta"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Benito-Armas-Hernandez-2.jpg"
    //   alt="Benito-Armas-Hernandez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Carlos-Alberto-Gutierrez-Sanchez-2.jpg"
    //   alt="Carlos-Alberto-Gutierrez-Sanchez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Emiliano-Fernandez-Armas.jpg"
    //   alt="Emiliano-Fernandez-Armas"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Esteban-Padron-Quintero.jpg"
    //   alt="Esteban-Padron-Quintero"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Felix-Zamora-Gutierrez.jpg"
    //   alt="Felix-Zamora-Gutierrez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Fernando-Padron-Casanas-2.jpg"
    //   alt="Fernando-Padron-Casanas"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Francisco-Armas-Gonzalez.jpg"
    //   alt="Francisco-Armas-Gonzalez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Francisco-Quintero-Morales.jpg"
    //   alt="Francisco-Quintero-Morales"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/IMG-20210814-WA0038-768x1024.jpg"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Jose-Luis-Acosta-Castaneda-2.jpg"
    //   alt="Jose-Luis-Acosta-Castaneda"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Juan-Francisco-Quintero-Padron-2-683x1024.jpg"
    //   alt="Juan-Francisco-Quintero-Padron"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Juan-Francisco-Quintero-Perez.jpg"
    //   alt="Juan-Francisco-Quintero-Perez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Lalo-Fonte-Armas-2.jpg"
    //   alt="Lalo-Fonte-Armas"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Manuel-Padron-Quintero-2.jpg"
    //   alt="Manuel-Padron-Quintero"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Maria-Reyes-Gutierrez-Quintero.jpg"
    //   alt="Maria-Reyes-Gutierrez-Quintero"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Pablo-Martin-Zamora-2.jpg"
    //   alt="Pablo-Martin-Zamora"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Pedro-Machin-Padron-2.jpg"
    //   alt="Pedro-Machin-Padron"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Rafael-Castaneda-Rodriguez-2.jpg"
    //   alt="Rafael-Castaneda-Rodriguez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Ramon-Angel-Mendez-Padron-2.jpg"
    //   alt="Ramon-Angel-Mendez-Padron"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Remedios-Morales-Gonzalez-2.jpg"
    //   alt="Remedios-Morales-Gonzalez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Rosario-Morales-Gonzalez-2.jpg"
    //   alt="Rosario-Morales-Gonzalez"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Trinidad-Padron-Peraza.jpg"
    //   alt="Trinidad-Padron-Peraza"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Epifanio-Zamora-Machin-2.jpg"
    //   alt="Epifanio-Zamora-Machin"
    //   width={width}
    // />,
    // <StaticImage
    //   src="../images/Emiliano-Garcia-Garcia-2.jpg"
    //   alt="Emiliano-Garcia-Garcia"
    //   width={width}
    // />,
  ];

  return (
    <main>
      <Navigationbar />
      <Banner />
      <div className={container}>
        <h2>Silbadores actuales</h2>
        <p>
          Galería homenaje a los silbadores herreños que mantienen viva esta
          bella tradición
        </p>
        <div className={silbadores}>
          {portraits.map((silbador) => {
            return <Silbadores silbador={silbador} />;
          })}
        </div>
        <Casas />
        <Testimonios />
        <Colaboracion />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
