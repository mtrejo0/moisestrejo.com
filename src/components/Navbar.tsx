import React from "react";

import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/resume++">Resume ++</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/p5art">P5 Art</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="nav-li">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
