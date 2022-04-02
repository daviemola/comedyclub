import { useRouter } from "next/router";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchForm() {
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  // const [artists, setArtists] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(zipcode);
    // console.log(artists);
    // console.log(startDate);
    // console.log(endDate);
    // router.push(
    //   `/results/search?zipcode=${zipcode}&performers=${artists}&start=${startDate}&end=${endDate}`
    // );

    //redirect the user to the search page
    router.push(`/results/search?zipcode=${zipcode}`);
    setCity("");
    setZipcode("");
  };

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
                    placeholder="Search Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-map-marker"></i>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group for-mobile">
                  <DatePicker
                    style={{ zIndex: "999" }}
                    selectsRange={true}
                    startDate={startDate}
                    minDate={new Date()}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    placeholderText="Select a Date Range"
                    className="form-control"
                  />
                  <i className="fa fa-calendar-o"></i>
                  <span className="fa fa-angle-down"></span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group for-mobile">
                  <input
                    type="text"
                    // value={artists}
                    value={city}
                    // onChange={(e) => setArtists(e.target.value)}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control border-none"
                    placeholder="Search City"
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
          <p>
            <a href="#">Can’t decide? Find a show happening today, now!</a>
          </p>
        </div>
      </div>
    </div>
  );
}
