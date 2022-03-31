import React from "react";
import Image from "next/image";

export default function SingleResult({ show }) {
  return (
    <div className="single-result wow fadeInUp delay-0-2s" key={show.id}>
      <div className="row align-items-center">
        <div className="col-xl-6 pr-0">
          <div className="results-img">
            <div>
              <img src={show.image} alt="Image" style={{ height: "501px" }} />
            </div>
            <span>{show.time}</span>
          </div>
        </div>
        <div className="col-xl-6 pl-0">
          <div className="results-content">
            <span>
              <i className="fa fa-calendar-o"></i> NOV 25, 2021
            </span>
            <h3>
              <a href="#">{show.name}</a>
            </h3>
            <p>{`${show.city} · ${show.venue}`}</p>
            <p>{show.desc}</p>
            <ul>
              {show.performers.map((show) => (
                <li key={show.id}>
                  <a href="#">
                    <div className="result-img">
                      <img src={show.image} alt="Image" />
                    </div>
                    <span>
                      {show.name.split(" ")[0]}
                      <br />
                      {show.name.split(" ")[1]}
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
}
