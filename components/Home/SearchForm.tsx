import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm() {
  const [zipcode, setZipcode] = useState("");
  const [period, setPeriod] = useState("");
  const [artists, setArtists] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      period,
      zipcode,
      artists,
    };
    // const end = window.document.getElementById("#basic").endDate;
    // console.log(end);
    console.log(period);
    console.log(zipcode);
    console.log(artists);
  };

  // const [isOpen, setIsOpen] = useState(false);
  // const handleChange = (e: any) => {
  //   setIsOpen(!isOpen);
  //   setStartDate(e);
  // };
  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <div className="search-form wow fadeInUp delay-0-6s">
        <div className="container" style={{ position: "relative" }}>
          <form className="src-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-3">
                <div className="select-blk">
                  <input
                    type="text"
                    placeholder="City or Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-map-marker"></i>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    name="basic"
                    id="basic"
                    className="form-control"
                    placeholder="02/02/2020 - 02/03/2020"
                  />
                  <i className="fa fa-calendar-o"></i>
                  <span className="fa fa-angle-down"></span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group for-mobile">
                  <input
                    type="text"
                    value={artists}
                    onChange={(e) => setArtists(e.target.value)}
                    className="form-control border-none"
                    placeholder="Search for artists, come..."
                  />
                  <i className="fa fa-search"></i>
                </div>
                <div className="form-group">
                  <button type="submit" className="src-btn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div>
            {/* {isOpen && (
              <DatePicker selected={startDate} onChange={handleChange} inline />
            )} */}
          </div>

          <p>
            <a href="#">Can’t decide? Find a show happening today, now!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
