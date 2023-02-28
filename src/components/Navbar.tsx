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
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
