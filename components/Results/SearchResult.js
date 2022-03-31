import React from "react";

export default function SearchResult({ shows }) {
  // console.log(shows.data.length);
  return (
    <>
      {shows.data.map((show) => {
        console.log(`${show.attributes.photo_url}`);
        return (
          <div className="single-result wow fadeInUp delay-0-2s" key={show.id}>
            <div className="row align-items-center">
              <div className="col-xl-6 pr-0">
                <div className="results-img">
                  <a href="#">
                    <img
                      src={`${show.attributes.photo_url}`}
                      alt="Image"
                      style={{ height: "501px" }}
                    />
                  </a>
                  <span>Thursday 9:30 pm</span>
                </div>
              </div>
              <div className="col-xl-6 pl-0">
                <div className="results-content">
                  <span>
                    <i className="fa fa-calendar-o"></i> NOV 25, 2021
                  </span>
                  <h3>
                    <a href="#">{show.attributes.name}</a>
                  </h3>
                  <p>{`${show.attributes.city} · ${show.attributes.venue}`}</p>
                  <p>
                    Amet nulla facilisi morbi tempus iaculis urna id volutpat.
                    Placerat orci nulla pellentesque dignissim enim sit amet
                    venenatis urna. Mi proin sed libero enim sed. Aliquam
                    malesuada bibendum arcu vitae.
                  </p>
                  <ul>
                    {show.attributes.performers.data.map((show) => (
                      <li key={show.id}>
                        <a href="#">
                          <div className="result-img">
                            <img src={`${show.attributes.image}`} alt="Image" />
                          </div>
                          <span>
                            {show.attributes.name.split(" ")[0]}
                            <br />
                            {show.attributes.name.split(" ")[1]}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="default-btn">
                    Buy Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
