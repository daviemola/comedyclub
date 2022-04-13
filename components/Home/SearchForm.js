import { useRouter } from "next/router";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import moment from "moment";

export default function SearchForm() {
  const [zipcode, setZipcode] = useState("");
  const [artists, setArtists] = useState("");
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(zipcode);
    // console.log(artists);
    // console.log(moment(startDate).format("YYYY-MM-DD"));
    // console.log(moment(endDate).format("YYYY-MM-DD"));
    router.push(
      `/results/search?zipcode=${zipcode > 0 ? zipcode : 0}&start=${moment(
        startDate
      ).format("YYYY-MM-DD")}&end=${moment(endDate).format(
        "YYYY-MM-DD"
      )}&performers=${artists}`
    );

    //redirect the user to the search page
    // router.push(`/results/search?zipcode=${zipcode}`);
    setArtists("");
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
                    minLength="3"
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                  <i className="fa fa-angle-down"></i>
                  <i className="fa fa-map-marker"></i>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <DatePicker
                    dateFormat="MM/dd/yyyy"
                    selectsRange
                    startDate={startDate}
                    selectsStart
                    minDate={new Date()}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    className="form-control"
                  />
                  <i className="fa fa-calendar-o"></i>
                  <span className="fa fa-angle-down"></span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    value={artists}
                    minLength="3"
                    onChange={(e) => setArtists(e.target.value)}
                    className="form-control border-none"
                    placeholder="  Search show name, artists..."
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
