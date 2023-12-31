import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <h1
        style={{
          fontSize: isMobile ? "32px" : "96px",
          marginBottom: "0",
          marginTop: "16px",
        }}
      >
        MOISES TREJO
      </h1>

      <b>
        <p
          style={{
            margin: 0,
            marginBottom: "16px",
          }}
        >
          el mero mero.
        </p>
      </b>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
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
          <NavLink to="/resume++">Resume++</NavLink>
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
            textDecoration: location.pathname === "/art" ? "underline" : "none",
          }}
        >
          <NavLink to="/art">Art</NavLink>
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
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/about" ? "underline" : "none",
          }}
        >
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
