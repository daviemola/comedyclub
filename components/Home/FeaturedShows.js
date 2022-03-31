import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedShows = ({ shows, title }) => {
  return (
    <div className="featured-area pb-70">
      <div className="container">
        <div className="section-title left-title">
          <h2>{title}</h2>
          <Link href="/results/performers">
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
                <div className="mb-2">
                  <div className="single-featured wow fadeInUp delay-0-2s">
                    <a href="#">
                      <img src={`${show.image}`} alt="Image" />
                    </a>
                    <div className="up-coming-content">
                      <h3>
                        <Link href="#">
                          <a>{`${show.name}`}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="col-12">
            <Link href="#">
              <a className="read-more for-d-none">See All</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedShows;
