import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UpcomingShows = ({ shows, title }) => {
  return (
    <div className="upcoming-area pt-100 pb-70">
      <div className="container">
        <div className="section-title left-title">
          <h2>{title}</h2>
          <Link href="/results">
            <a className="read-more">
              See All <i className="fa fa-angle-right"></i>
            </a>
          </Link>
        </div>
        <div className="row justify-content-center mx-1">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {shows.map((show, index) => (
              <SwiperSlide key={index} className="mb-4">
                <div>
                  <div className="single-upcoming wow fadeInUp delay-0-2s">
                    <a href="#">
                      <img src={`${show.image}`} alt="Image" />
                    </a>
                    <div className="up-coming-content">
                      <span>
                        <i className="fa fa-calendar-o"></i> {show.date}
                      </span>
                      <h3>
                        <a href="#">{show.name}</a>
                      </h3>
                      <p>{`${show.city} · ${show.venue}`}</p>
                      <a href="#" className="default-btn">
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="col-12">
            <a href="#" className="read-more for-d-none">
              See All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingShows;
