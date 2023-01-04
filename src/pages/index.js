import * as React from "react";
import Banner from "../components/banner";
import Silbadores from "../components/silbadores";
import Navigationbar from "../components/navigationbar";
import Facebook from "../components/facebook";
import Casas from "../components/casas";
import Testimonios from "../components/testimonios";
import Colaboracion from "../components/colaboracion";
import Footer from "../components/footer";
import { container } from "../components/index.module.scss";

const IndexPage = () => {
  return (
    <main>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v15.0&appId=471465151729810&autoLogAppEvents=1"
        nonce="E7l4K9oe"
      ></script>
      <Navigationbar />
      <Banner />
      <div className={container}>
        <Facebook />
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
