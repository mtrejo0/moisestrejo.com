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
        alignItems: isMobile ? "center" : "flex-start",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        paddingTop: '32px',
        paddingBottom: '32px',
        paddingLeft: isMobile ? '0' : '32px',
        paddingRight: isMobile ? '0' : '32px'
      }}
    >
      <div style={{ 
        fontWeight: 'bold', 
        fontSize: '1.2rem',
        marginBottom: isMobile ? '16px' : '0',
        alignSelf: isMobile ? 'center' : 'flex-start'
      }}>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Moises Trejo</NavLink>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: '-8px'
        }}
      >
        <div
          className="nav-li"
          style={{
            textDecoration:
              location.pathname === "/about" ? "underline" : "none",
          }}
        >
          <NavLink to="/about">About</NavLink>
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
              location.pathname === "/resume" ? "underline" : "none",
          }}
        >
          <NavLink to="/resume">Resume</NavLink>
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
              location.pathname === "/art" ? "underline" : "none",
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
          <NavLink to="/blog">Medium</NavLink>
        </div>
        
      </div>
    </div>
  );
};

export default NavigationBar;
