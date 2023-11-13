import React from "react";

import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/home" ? "underline" : "none",
          }}
        >
          <NavLink to="/home">Home</NavLink>
        </div>
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/resume" ? "underline" : "none",
          }}
        >
          <NavLink to="/resume">Resume</NavLink>
        </div>
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/resume++" ? "underline" : "none",
          }}
        >
          <NavLink to="/resume++">Resume ++</NavLink>
        </div>
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/portfolio" ? "underline" : "none",
          }}
        >
          <NavLink to="/portfolio">Portfolio</NavLink>
        </div>
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/p5art" ? "underline" : "none",
          }}
        >
          <NavLink to="/p5art">P5 Art</NavLink>
        </div>
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/blog" ? "underline" : "none",
          }}
        >
          <NavLink to="/blog">Blog</NavLink>
        </div>
        {/* <div className="nav-li">
            <NavLink to="/press">Press</NavLink>
          </div> */}
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/shop" ? "underline" : "none",
          }}
        >
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/contact" ? "underline" : "none",
          }}
        >
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
