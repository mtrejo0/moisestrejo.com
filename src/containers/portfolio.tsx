import React from "react";
import { NavLink } from "react-router-dom";

import p5jsProjects from "../information/p5jsProjects.json";
import internalApps from "../information/internalApps.json";
import externalApps from "../information/externalApps.json";

import Grid from "@mui/material/Grid";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const PortfolioItem = ({
  item,
}: {
  item: { name: string; description: string[]; id: string };
}) => {
  const link = `https://moisesp5js.s3.us-east-2.amazonaws.com/${item.id}/index.html`;
  return (
    <div className="nice-border center">
      <a href={link}>
        <h3>{item.name}</h3>
      </a>
      <a href={link}>
        <img
          className="webapp-image"
          src={process.env.PUBLIC_URL + `/images/${item.id}.jpg`}
          alt={item.id}
        />
      </a>
      <br></br>
      <ul>
        {item.description.map((each: any) => (
          <li>{each}</li>
        ))}
      </ul>
    </div>
  );
};

const InternalApp = ({ app }: { app: any }) => {
  return (
    <div className="nice-border center">
      <NavLink to={`/${app.id}`}>
        <h3>{app.name}</h3>
      </NavLink>
      <br></br>
      <p>{app.description}</p>
    </div>
  );
};

const ExternalApp = ({ app }: { app: any }) => {
  return (
    <a href={app.link} style={{ textDecoration: "none" }}>
      <div className="nice-border center">
        <h3>{app.name}</h3>
        <br></br>
        <p>{app.description}</p>
      </div>
    </a>
  );
};

const Porfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="center">
      <h3>External Apps</h3>
      <Grid container>
        {externalApps.map((app) => {
          return (
            <Grid item xs={isMobile ? 12 : 6} style={{ width: "100%" }}>
              <ExternalApp app={app} />
            </Grid>
          );
        })}
      </Grid>

      <h3>Internal Apps</h3>

      <Grid container>
        {internalApps.map((app) => {
          return (
            <Grid item xs={isMobile ? 12 : 6} style={{ width: "100%" }}>
              <InternalApp app={app} />
            </Grid>
          );
        })}
      </Grid>
      <h3>P5.js</h3>
      <Grid container>
        {p5jsProjects.map((item) => {
          return (
            <Grid item xs={isMobile ? 12 : 6}>
              <PortfolioItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Porfolio;
