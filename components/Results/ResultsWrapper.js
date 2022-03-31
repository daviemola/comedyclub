import React from "react";

export default function ResultsWrapper({ children }) {
  return (
    <div className="results-area pt-100">
      <div className="container">
        <div className="section-title left-title">
          <h2>Results</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
