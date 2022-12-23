import * as React from "react";
import Banner from "../components/banner";
import Silbadores from "../components/silbadores";
import { container } from "../components/index.module.scss";

const IndexPage = () => {
  return (
    <main>
      <Banner />
      <div className={container}>
        <Silbadores />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
