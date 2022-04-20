import Image from "next/image";
import React, { useState } from "react";
import moment from "moment";
import Pagination from "../Layout/Pagination";

export default function SearchResult({ data }) {
  return (
    <>
      {data.error === "0" ? (
        <div className="wow fadeInUp delay-0-2s">
          <div className="">
            <div className="">
              <h5>No Results to Show</h5>
            </div>
          </div>
        </div>
      ) : (
        <>
          {data.data.map((show, index) => {
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
                    <span className="show-date">
                      {moment(show.start_data_time).format("dddd h:mm a")}
                    </span>
                  </div>
                  <div
                    className="col-xl-6 pl-0"
                    style={{ maxHeight: "500.96px" }}
                  >
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
                        enim sit amet venenatis urna. Mi proin sed libero enim
                        sed. Aliquam malesuada bibendum arcu vitae.
                      </p>
                      <ul>
                        {show.show_performers.map((show, index) => (
                          <li key={index}>
                            <a href="#">
                              <div className="result-images">
                                <Image
                                  src={show.ex_image_link}
                                  width={65}
                                  height={65}
                                  quality={50}
                                  alt={show.displayname}
                                  className="result-images"
                                />
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
      <div className="wow fadeInUp delay-0-2s">
        <Pagination
          page={data.current_page}
          lastpage={data.last_page}
          nextpage={data.next_page_url}
          prevpage={data.prev_page_url}
        />
      </div>
    </>
  );
}
