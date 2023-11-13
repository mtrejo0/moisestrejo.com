import p5jsProjects from "../information/p5jsProjects.json";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import { useState } from "react";

export const P5App = ({ app }: { app: any }) => {
  const link = `https://mtrejo0.github.io/p5/${app.id}/index.html`;
  return (
    <Box className="nice-border" height="100vh">
      <Grid container>
        <Grid xs={6}>
          <h1>{app.name}</h1>

          <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
            moisestrejo.com/{app.id}
          </a>

          <br></br>

          {app.description.map((each: any) => (
            <p style={{ color: "black" }}>{each}</p>
          ))}

          {app.youtubeLink && <a href={app.youtubeLink}>Youtube Video</a>}
        </Grid>
        <Grid xs={6} paddingTop={"32px"}>
          {app.href ? (
            <iframe
              src={app.href}
              title={app.href}
              width="100%"
              height={"100%"}
              frameBorder="0"
              sandbox="allow-forms allow-scripts"
            ></iframe>
          ) : app.video ? (
            <iframe
              src={"https://www.youtube.com/embed/" + app.video}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={app.video}
              width={"300px"}
              height="200px"
            />
          ) : (
            <img
              className="webapp-image"
              src={
                app.href
                  ? app.href
                  : process.env.PUBLIC_URL +
                    `/images/p5/${app.src ? app.src : app.id + ".jpg"}`
              }
              alt={app.id}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const P5Art = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [activeApp, setActiveApp] = useState(p5jsProjects[0]);

  return (
    <div>
      <Box display={"flex"} mb={"100px"}>
        <Box width={"20%"}>
          {p5jsProjects.map((app) => {
            return (
              <div
                style={{
                  textAlign: "left",
                  width: "fit-content",
                  marginLeft: "64px",
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
        <Box width={"80%"} mr={"64px"} ml={"16px"}>
          <P5App app={activeApp} />
        </Box>
      </Box>
    </div>
  );
};

export default P5Art;
