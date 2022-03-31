import React from "react";

const Banner = ({ desc, title }) => {
  return (
    <div className="banner-area ptb-100">
      <div className="container">
        <div className="banner-content">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
