import React from "react";

const Error = () => {
  return (
    <div className="center">
      <br></br>
      <h1>Error wrong page!</h1>
      <img
        src={process.env.PUBLIC_URL + `/images/cat-error.png`}
        alt={"error"}
      ></img>
    </div>
  );
};

export default Error;
