import React from "react";
import Image from "next/image";
import moment from "moment";

export default function SingleResult({ shows }) {
  console.log(shows);
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
          {shows.map((show, index) => {
            return (
              <div key={index} className="">
                <div className="single-result wow fadeInUp delay-0-2s display-none">
                  <div className="row-results row align-items-center">
                    <div className="image-result">
                      <div className="">
                        <Image
                          src={show.external_image_link}
                          height={500}
                          width={940}
                          alt={show.show_title}
                          quality={70}
                          className="image-result"
                        />
                        <span className="show-date">
                          {moment(show.start_data_time).format("dddd h:mm a")}
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 pl-0">
                      <div className="results-content">
                        <span>
                          <i className="fa fa-calendar-o"></i>{" "}
                          {moment(show.start_data_time).format("MMM DD, YYYY")}
                        </span>
                        <h3>
                          <a href="#">{show.show_title}</a>
                        </h3>
                        <p>{`${show.venue.city} · ${show.venue.venue_name}`}</p>
                        <p>
                          Amet nulla facilisi morbi tempus iaculis urna id
                          volutpat. Placerat orci nulla pellentesque dignissim
                          enim sit amet venenatis urna.
                        </p>
                        <ul>
                          {/* {show.show_performers.map((show, index) => ( */}
                          <li>
                            <a href="#">
                              <div className="result-images">
                                <Image
                                  src={show.external_image_link}
                                  width={65}
                                  height={65}
                                  quality={50}
                                  alt={show.displayname}
                                  className="result-images"
                                />
                              </div>
                              <span>
                                {/* {show.displayname.split(" ")[0]} */}
                                test
                                <br />
                                name
                                {/* {show.displayname.split(" ")[1]} */}
                              </span>
                            </a>
                          </li>
                          {/* ))} */}
                        </ul>
                        <a href="#" className="default-btn">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-result wow fadeInUp delay-0-2s display-block maxheight">
                  <div className="row-results row align-items-center">
                    <div className="image-result">
                      <div className="">
                        <Image
                          src={show.external_image_link}
                          height={500}
                          width={640}
                          alt={show.show_title}
                          quality={70}
                          objectFit="cover"
                          priority
                          className="image-result"
                        />
                        <span className="show-date">
                          {moment(show.start_data_time).format("dddd h:mm a")}
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-6 pl-0">
                      <div className="results-content">
                        <span>
                          <i className="fa fa-calendar-o"></i>{" "}
                          {moment(show.start_data_time).format("MMM DD, YYYY")}
                        </span>
                        <h3>
                          <a href="#">{show.show_title}</a>
                        </h3>
                        <p>{`${show.venue.city} · ${show.venue.venue_name}`}</p>
                        <p>
                          Amet nulla facilisi morbi tempus iaculis urna id
                          volutpat. Placerat orci nulla pellentesque dignissim
                          enim sit amet venenatis urna.
                        </p>
                        <ul>
                          {/* {show.show_performers.map((show, index) => ( */}
                          <li key={index}>
                            <a href="#">
                              <div className="result-images">
                                <Image
                                  src={show.external_image_link}
                                  width={65}
                                  height={65}
                                  quality={50}
                                  alt={show.displayname}
                                  className="result-images"
                                />
                              </div>
                              <span>
                                {/* {show.displayname.split(" ")[0]} */}
                                test
                                <br />
                                name
                                {/* {show.displayname.split(" ")[1]} */}
                              </span>
                            </a>
                          </li>
                          {/* ))} */}
                        </ul>
                        <a href="#" className="default-btn">
                          Buy Ticket
                        </a>
                      </div>
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
