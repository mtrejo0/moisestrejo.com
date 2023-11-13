import { NavLink } from "react-router-dom";

import internalApps from "../information/internalApps.json";
import externalApps from "../information/externalApps.json";

import Grid from "@mui/material/Grid";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";

import { OpenInNew } from "@mui/icons-material";
import { useState } from "react";

export const P5Item = ({ item, p5 }: { item: any; p5?: boolean }) => {
  const link = `https://mtrejo0.github.io/p5/${item.id}/index.html`;
  return (
    <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="nice-border center">
        <Stack direction="row" alignItems={"center"} spacing={"8px"}>
          <h3>{item.name}</h3> <OpenInNew />
        </Stack>

        <div>
          {item.href ? (
            <a href={link} style={{ textDecoration: "none" }}>
              <iframe
                src={item.href}
                title={item.href}
                width="100%"
                frameBorder="0"
                sandbox="allow-forms allow-scripts"
              ></iframe>
            </a>
          ) : item.video ? (
            <iframe
              src={"https://www.youtube.com/embed/" + item.video}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={item.video}
              width={"300px"}
              height="200px"
            />
          ) : (
            <img
              className="webapp-image"
              src={
                item.href
                  ? item.href
                  : process.env.PUBLIC_URL +
                    `/images/${p5 ? "p5/" : ""}${
                      item.src ? item.src : item.id + ".jpg"
                    }`
              }
              alt={item.id}
            />
          )}
        </div>
        <br></br>
        <ul>
          {item.description.map((each: any) => (
            <li style={{ color: "black" }}>{each}</li>
          ))}
        </ul>
        {item.youtubeLink && <a href={item.youtubeLink}>Youtube Video</a>}
      </div>
    </a>
  );
};

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
  return (
    <Grid container className="nice-border" height={"100%"}>
      <Grid xs={8}>
        <h1>{app.name}</h1>

        <a href={app.link}>
          <p>moisestrejo.com/{app.id}</p>
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

      <Grid xs={4}>
        <ul>
          {app.resources.split(", ").map((each: any) => (
            <li>{each}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

const Porfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [activeApp, setActiveApp] = useState(externalApps[0]);

  return (
    <div>
      <Box display={"flex"} mb={"100px"}>
        <Box width={"20%"}>
          {externalApps.map((app) => {
            return (
              <div
                style={{
                  textAlign: "left",
                  width: "fit-content",
                  marginLeft: "64px",
                  textDecoration: app == activeApp ? "underline" : "none",
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
        <Box width={"80%"} mr={"64px"} ml={"16px"}>
          <ExternalApp app={activeApp} />
        </Box>
      </Box>

      {/* <h3>Internal Apps</h3>

      <Grid container>
        {internalApps.map((app) => {
          return (
            <Grid item xs={isMobile ? 12 : 4} >
              <InternalApp app={app} />
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
};

export default Porfolio;
