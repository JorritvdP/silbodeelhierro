import * as React from "react";
import Banner from "../components/banner";
import Silbadores from "../components/silbadores";
import Navigationbar from "../components/navigationbar";
import Casas from "../components/casas";
import Testimonios from "../components/testimonios";
import Colaboracion from "../components/colaboracion";
import Footer from "../components/footer";
import { container } from "../components/index.module.scss";

const IndexPage = () => {
  return (
    <main>
      <Navigationbar />
      <Banner />
      <div className={container}>
        <Silbadores />
        <Casas />
        <Testimonios />
        <Colaboracion />
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
