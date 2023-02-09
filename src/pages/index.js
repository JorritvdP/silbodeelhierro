import * as React from "react";
import Banner from "../components/banner";
import Silbadores from "../components/silbadores";
import Navigationbar from "../components/navigationbar";
import Casas from "../components/casas";
import Testimonios from "../components/testimonios";
import Colaboracion from "../components/colaboracion";
import Footer from "../components/footer";
import { container } from "../components/index.module.scss";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  <pre>{JSON.stringify(data, null, 2)}</pre>;
  const test1 = data.allFile.edges;
  console.log(data.allFile.edges);
  return (
    <main>
      <Navigationbar />
      <Banner />
      <div className={container}>
        <Silbadores data={test1} />
        <Casas />
        <Testimonios />
        <Colaboracion />
      </div>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "silbador" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 130, height: 150, formats: JPG, quality: 50)
            id
          }
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
