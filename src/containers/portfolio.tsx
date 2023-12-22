import { NavLink } from "react-router-dom";

import internalApps from "../information/internalApps.json";
import externalApps from "../information/externalApps.json";

import Grid from "@mui/material/Grid";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import { useState } from "react";

const InternalApp = ({ app }: { app: any }) => {
  return (
    <div
      className="nice-border center"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <NavLink to={`/${app.id}`}>
        <h3>{app.name}</h3>
      </NavLink>
      <br></br>
      <p>{app.description}</p>
    </div>
  );
};

const ExternalApp = ({ app }: { app: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="nice-border" height={"100%"}>
      <Grid container>
        <Grid xs={12}>
          <h1>{app.name}</h1>
        </Grid>
        <Grid xs={8}>
          <a
            href={app.link}
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
          >
            <b>moisestrejo.com/{app.id}</b>
          </a>

          <p>{app.description}</p>

          {app.video && (
            <iframe
              src={"https://www.youtube.com/embed/" + app.video}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={app.video}
              width={"300px"}
              height="200px"
            />
          )}
        </Grid>

        <Grid xs={isMobile ? 12 : 4}>
          <ul>
            {app.resources.split(", ").map((each: any) => (
              <li>{each}</li>
            ))}
          </ul>
        </Grid>

        <Grid xs={12}>
        <iframe
              src={app.link}
              title={app.id}
              width="100%"
              height="1000px"
            />
        </Grid>

        
      </Grid>
    </Box>
  );
};

const Porfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [activeApp, setActiveApp] = useState(externalApps[0]);

  return (
    <div>
      <Box display={"flex"} mb={"100px"}>
        <Box width={"20%"} pl={isMobile ? "8px" : "64px"}>
          {externalApps.map((app) => {
            return (
              <div
                style={{
                  textAlign: "left",
                  width: "fit-content",
                  textDecoration: app == activeApp ? "underline" : "none",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setActiveApp(app)}
              >
                <b>
                  <p style={{ width: "fit-content", textAlign: "left" }}>
                    {app.name}
                  </p>
                </b>
              </div>
            );
          })}
        </Box>
        <Box
          width={"80%"}
          mr={isMobile ? "8px" : "64px"}
          ml={isMobile ? "8px" : "16px"}
        >
          <ExternalApp app={activeApp} />
        </Box>
      </Box>

    </div>
  );
};

export default Porfolio;
