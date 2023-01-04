import React from "react";

// window.fbAsyncInit = function() {
//   FB.init({
//     appId            : 'your-app-id',
//     autoLogAppEvents : true,
//     xfbml            : true,
//     version          : 'v15.0'
//   });
// };

const Facebook = () => {
  // FB.api(
  //   "/me",
  //   "GET",
  //   {
  //     fields:
  //       "id,name,posts{full_picture,caption,description}",
  //   },
  //   function (response) {
  //     return (
  //       <div>
  //         <h3>{response.caption}</h3>
  //         <p>{response.description}</p>
  //       </div>
  //     );
  //   }
  // );
  return (
    <div
      class="fb-page"
      data-href="https://www.facebook.com/profile.php?id=100063636127501"
      data-tabs="timeline"
      data-width=""
      data-height="400"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/profile.php?id=100063636127501"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/profile.php?id=100063636127501">
          Silbo Herreño
        </a>
      </blockquote>
    </div>
  );
};

export default Facebook;
