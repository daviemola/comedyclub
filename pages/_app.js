import Router from "next/router";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
