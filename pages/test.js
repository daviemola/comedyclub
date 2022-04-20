import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function test() {
  return (
    <div>
      Date picker here
      <DatePicker
        dateFormat="MM/dd/yyyy"
        selectsRange
        // startDate={startDate}
        selectsStart
        minDate={new Date()}
        // endDate={endDate}
        // onChange={(update) => {
        //   setDateRange(update);
        // }}
        className="form-control"
      />
    </div>
  );
}
