import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as AiIcons from "react-icons/ai";

const UpcomingShows = ({ shows, title }) => {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="upcoming-area pt-100 pb-70">
      <div className="container">
        <div className="container">
          <div className="section-title left-title">
            <h2>{title}</h2>
            <Link href="/results">
              <a className="read-more">
                See All <i className="fa fa-angle-right"></i>
              </a>
            </Link>
          </div>
        </div>

        <div className="container-2">
          <div className="swiper-button-two" ref={prevRef}>
            <AiIcons.AiOutlineLeft className="swiper-icon" />
          </div>
          <div className="swiper-button-one" ref={nextRef}>
            <AiIcons.AiOutlineRight className="swiper-icon" />
          </div>
          <div className="row justify-content-center mx-1">
            <Swiper
              style={{
                "--swiper-navigation-color": "#301434",
                "--swiper-pagination-color": "#301434",
              }}
              slidesPerView={3}
              spaceBetween={30}
              onSwiper={setSwiper}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current,
              }}
              modules={[Navigation, Pagination]}
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
              className="mySwiper"
            >
              {shows.map((show, index) => (
                <SwiperSlide key={index} className="mb-4">
                  <div>
                    <div className="single-upcoming wow fadeInUp delay-0-2s">
                      <a href="#">
                        <img
                          src={`${show.image}`}
                          alt="Image"
                          style={{ zIndex: 1 }}
                        />
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
              <Link href="/results">
                <a className="read-more for-d-none">See All</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingShows;
