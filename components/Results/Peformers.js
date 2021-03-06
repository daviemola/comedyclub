import Link from "next/link";
import React from "react";

const FeaturedShows = ({ perfomers, title }) => {
  // console.log(perfomers);
  return (
    <div className="featured-area pb-70">
      <div className="container">
        <div className="section-title left-title">
          <h2>{title}</h2>
        </div>
        <div className="row justify-content-center mx-1">
          {perfomers.success.map((perfomer, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="mb-2">
                <div className="single-featured wow fadeInUp delay-0-2s">
                  <a href="#">
                    {/* <img src={`${show.image}`} alt="Image" /> */}
                  </a>
                  <div className="up-coming-content">
                    <h3>
                      <Link href="#">
                        <a>{`${perfomer.displayname}`}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedShows;
