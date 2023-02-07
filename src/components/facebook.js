import React from "react";
import { Helmet } from "react-helmet";
import { fbPage } from "./facebook.module.scss";

const Facebook = () => {
  return (
    <main>
      <div id="fb-root"></div>
      <Helmet>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v16.0&appId=471465151729810&autoLogAppEvents=1"
          nonce="AhYedPnB"
        ></script>
      </Helmet>
      <div
        className={fbPage}
        data-href="https://www.facebook.com/MdNMadrid"
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/MdNMadrid"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/MdNMadrid" target="_blank">
            Movimientodelnorte
          </a>
        </blockquote>
      </div>
    </main>
  );
};

export default Facebook;
