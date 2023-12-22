import p5jsProjects from "../information/p5jsProjects.json";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import { useState } from "react";

export const P5App = ({ app }: { app: any }) => {
  const link = `https://mtrejo0.github.io/p5/${app.id}/index.html`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="nice-border" height="100%" mr={isMobile ? 0 : "auto"}>
      <Grid container>
        <Grid xs={12}>
          {" "}
          <h1>{app.name}</h1>
        </Grid>
        <Grid xs={12}>
          <a
            href={link}
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
          >
            <b>moisestrejo.com/{app.id}</b>
          </a>

          {app.description.map((each: any) => (
            <p style={{ color: "black" }}>{each}</p>
          ))}

          {app.youtubeLink && <a href={app.youtubeLink}>Youtube Video</a>}
        </Grid>
        <Grid xs={12}>
          {isMobile ? (
            app.href ? (
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
            ) : null
          ) : (
            <iframe
              src={`https://mtrejo0.github.io/p5/${app.id}/index.html`}
              title={app.id}
              width="100%"
              height="1000px"
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
    <Box display={"flex"} width={"100%"} mb={"100px"}>
      <Box width={"20%"} pl={isMobile ? "8px" : "64px"}>
        {p5jsProjects.map((app) => {
          return (
            <div
              style={{
                textAlign: "left",
                width: "fit-content",
                textDecoration: app === activeApp ? "underline" : "none",
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
        <P5App app={activeApp} />
      </Box>
    </Box>
  );
};

export default P5Art;
