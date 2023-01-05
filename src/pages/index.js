import * as React from "react";
import { graphql } from "gatsby";
import Banner from "../components/banner";
import Silbadores from "../components/silbadores";
import Navigationbar from "../components/navigationbar";
import Casas from "../components/casas";
import Testimonios from "../components/testimonios";
import Colaboracion from "../components/colaboracion";
import Footer from "../components/footer";
import { container } from "../components/index.module.scss";

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        gatsbyImageData(width: 130)
        id
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <main>
      <Navigationbar />
      <Banner />
      <div className={container}>
        <Silbadores portraits={data.allImageSharp.nodes} />
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
