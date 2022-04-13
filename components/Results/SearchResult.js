import React from "react";
import Image from "next/image";
export default function SearchResult({ shows }) {
  // console.log(shows.data.length);
  // console.log(shows.length);
  // console.log(shows.success);
  return (
    <>
      {shows.error === "0" ? (
        <div className="wow fadeInUp delay-0-2s">
          <div className="">
            <div className="">
              <h5>No Results to Show</h5>
            </div>
          </div>
        </div>
      ) : (
        <>
          {shows.success.map((show, index) => {
            return (
              <div
                className="single-result wow fadeInUp delay-0-2s"
                key={index}
              >
                <div className="row-results row align-items-center">
                  <div className="col-xl-6 pr-0 res-image">
                    <Image
                      src={show.external_image_link}
                      layout="fill"
                      alt={show.show_title}
                      className="image-result"
                    />
                    <span className="show-date">Thursday 9:30 pm</span>
                  </div>
                  <div
                    className="col-xl-6 pl-0"
                    style={{ maxHeight: "500.96px" }}
                  >
                    <div className="results-content">
                      <span>
                        <i className="fa fa-calendar-o"></i> NOV 25, 2021
                      </span>
                      <h3>
                        <a href="#">{show.show_title}</a>
                      </h3>
                      <p>{`${show.venue.city} · ${show.venue.venue_name}`}</p>
                      <p>
                        Amet nulla facilisi morbi tempus iaculis urna id
                        volutpat. Placerat orci nulla pellentesque dignissim
                        enim sit amet venenatis urna. Mi proin sed libero enim
                        sed. Aliquam malesuada bibendum arcu vitae.
                      </p>
                      <ul>
                        {show.show_performers.map((show, index) => (
                          <li key={index}>
                            <a href="#">
                              <div className="result-img">
                                {/* <Image
                              src={show.ex_image_link}
                              layout="fill"
                              alt={show.displayname}
                            /> */}
                                <img src={show.ex_image_link} alt="Image" />
                              </div>
                              <span>
                                {show.displayname.split(" ")[0]}
                                <br />
                                {show.displayname.split(" ")[1]}
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
      )}
    </>
  );
}
