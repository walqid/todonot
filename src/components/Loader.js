import React from "react";

const Loader = () => {
  return (
    <div
      className="row align-items-center justify-content-center"
      style={{ height: "70vh" }}
    >
      <div className="col" style={{ textAlign: "center" }}>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
