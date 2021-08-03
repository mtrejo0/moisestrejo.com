import React from "react";

import webapps from "../information/webapps.json";

const WebbappItem = ({ webapp }) => {
  let link = `https://moisesp5js.s3.us-east-2.amazonaws.com/${webapp.id}/index.html`;
  return (
    <div class="list-item center">
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
      <p>{webapp.description}</p>
    </div>
  );
};

class Webapps extends React.Component {
  render() {
    return (
      <div class="webapp-grid">
        {webapps.map((webapp) => {
          return (
            <div class="webapp-item center">
              <WebbappItem webapp={webapp} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Webapps;
