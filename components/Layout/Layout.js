import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import Router from "next/router";

export default function Layout({ children }) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <div className="body">
      <Head>
        <title>Comedy Grind - Home</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {loading && (
        <div className="preloader">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
