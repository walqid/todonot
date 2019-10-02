import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div
      className="row align-items-center justify-content-center w-100"
      style={{ height: "50vh" }}
    >
      <div className="col" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>Not Found</p>
        <Link to="/" className="btn btn-success">
          Go to Home
        </Link>
      </div>
    </div>
  );
};
