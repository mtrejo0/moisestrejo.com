import React from "react";

import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "96px", marginBottom: "16px", marginTop: "16px" }}>
        MOISES TREJO
      </h1>

      <h1 style={{ fontSize: "16px", marginBottom: "16px", marginTop: "16px" }}>
        PUSSY. MONEY. WEED.
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="nav-li">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="nav-li">
          <NavLink to="/resume">Resume</NavLink>
        </div>
        <div className="nav-li">
          <NavLink to="/resume++">Resume ++</NavLink>
        </div>
        <div className="nav-li">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </div>
        <div className="nav-li">
          <NavLink to="/p5art">P5 Art</NavLink>
        </div>
        <div className="nav-li">
          <NavLink to="/blog">Blog</NavLink>
        </div>
        {/* <div className="nav-li">
            <NavLink to="/press">Press</NavLink>
          </div> */}
        <div className="nav-li">
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div className="nav-li">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
