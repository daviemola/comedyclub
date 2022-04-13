import React from "react";
import Image from "next/image";

export default function SingleResult({ show }) {
  console.log(show);
  return (
    <div className="single-result wow fadeInUp delay-0-6s">
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
        <div className="col-xl-6 pl-0" style={{ maxHeight: "500.96px" }}>
          <div className="results-content">
            <span>
              <i className="fa fa-calendar-o"> </i> NOV 25, 2021{" "}
            </span>
            <h3>
              <a href="#">{show.show_title}</a>
            </h3>
            <p>New York, NY · Manhattan Center</p>
            <p>
              Amet nulla facilisi morbi tempus iaculis urna id volutpat.
              Placerat orci nulla pellentesque dignissim enim sit amet venenatis
              urna. Mi proin sed libero enim sed. Aliquam malesuada bibendum
              arcu vitae.
            </p>
            <ul>
              <li>
                <a href="#">
                  <div className="result-img">
                    {/* <img src="assets/img/result/user-1.jpg" alt="Image" /> */}
                    <Image
                      src={show.external_image_link}
                      height={400}
                      width={300}
                      alt="image"
                    />
                  </div>
                  <span>
                    Adam <br />
                    Sendler
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="result-img">
                    <img src="assets/img/result/user-2.jpg" alt="Image" />
                  </div>
                  <span>
                    James <br />
                    Rogers
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="result-img">
                    <img src="assets/img/result/user-3.jpg" alt="Image" />
                  </div>
                  <span>
                    Steve <br />
                    Smith
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="result-img">
                    <img src="assets/img/result/user-4.jpg" alt="Image" />
                  </div>
                  <span>
                    William <br />
                    Smith
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="result-img">
                    <img src="assets/img/result/user-5.jpg" alt="Image" />
                  </div>
                  <span>
                    James <br />
                    Rogers
                  </span>
                </a>
              </li>
            </ul>
            <a href="#" className="default-btn">
              {" "}
              Buy Ticket{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
