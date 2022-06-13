import React from "react";
import { NavLink } from "react-router-dom";

import webapps from "../information/webapps.json";
import apps from "../information/apps.json";

const WebbappItem = ({ webapp }) => {
  let link = `https://moisesp5js.s3.us-east-2.amazonaws.com/${webapp.id}/index.html`;
  return (
    <div class="nice-border center">
      <a href={link}>
        <h3>{webapp.name}</h3>
      </a>
      <a href={link}>
        <img
          class="webapp-image"
          src={process.env.PUBLIC_URL + `/images/${webapp.id}.jpg`}
          alt={webapp.id}
        />
      </a>
      <br></br>
      <ul>{webapp.description.map(each => <li>{each}</li>)}</ul>
    </div>
  );
};

const App = ({ app }) => {
  return (
    <div class="nice-border center">
      <NavLink to={`/${app.id}`}>
        <h3>{app.name}</h3>
      </NavLink>
      <br></br>
      <p>{app.description}</p>
    </div>
  );
};

class Webapps extends React.Component {
  render() {
    return (
      <div className="center">
        <div class="webapp-grid">
          {apps.map((app) => {
            return (
              <div style={{ width: "100%" }}>
                <App app={app} />
              </div>
            );
          })}
        </div>
        <h3>P5.js</h3>
        <div class="webapp-grid">
          {webapps.map((webapp) => {
            return (
              <div class="webapp-item center">
                <WebbappItem webapp={webapp} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Webapps;
