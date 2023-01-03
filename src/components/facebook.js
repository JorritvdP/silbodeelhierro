import React from "react";

const Facebook = (response) => {
  FB.api(
    "/me",
    "GET",
    {
      fields:
        "id,name,posts{dynamic_posts{image_url,message,title},full_picture,caption,description}",
    },
    function (response) {
      return (
        <div>
          <h3>{response.caption}</h3>
          <p>{response.description}</p>
        </div>
      );
    }
  );
};

export default Facebook;
