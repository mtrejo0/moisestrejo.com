import React from 'react'

import {NavLink} from 'react-router-dom'


class NavigationBar extends React.Component {

    render(){
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
                <NavLink to="/webapps">Web Apps</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/press">Press</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        );
    }

}

export default NavigationBar;