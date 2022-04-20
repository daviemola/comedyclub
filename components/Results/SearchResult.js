import Image from "next/image";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import https from "https";
import moment from "moment";

export default function SearchResult({ data }) {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  // useEffect(() => {
  //   const getMoreShows = async () => {
  //     const httpsAgent = new https.Agent({
  //       rejectUnauthorized: false,
  //     });
  //     // console.log(httpsAgent);
  //     const res = await fetch(
  //       `https://doingtimeapp.com/api/v1/show/getshowswebformTEST/2021-12-23/2022-04-23/0/king/?page=3`,
  //       {
  //         method: "GET",
  //         mode: "cors",
  //         headers: {
  //           doingtimeid: "dYQdSFt23XRnLJLFFwkYN66JGQw5xWhXg7Rbksdg",
  //           "Content-Type": "application/json",
  //         },
  //         agent: httpsAgent,
  //       }
  //     ).catch((err) => console.log(err));
  //     const newPosts = await res.json();
  //     console.log(newPosts);
  //     // setPosts((post) => [...post, ...newPosts]);
  //   };
  //   getMoreShows();
  // }, []);

  return (
    <>
      {/* <InfiniteScroll
        dataLength={posts.length}
        next={getMoreShows}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      > */}
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
      </>
      {/* </InfiniteScroll> */}
    </>
  );
}
