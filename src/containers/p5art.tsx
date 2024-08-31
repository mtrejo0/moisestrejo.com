import p5jsProjects from "../information/p5jsProjects.json";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import AppListDisplay from "../components/AppListDisplay";

export const P5App = ({ app }: { app: any }) => {
  const link = `https://moisestrejo.com/${app.id}`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="nice-border" height="100%">
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
  return (
    <div style={{marginTop: '-32px'}}>
      <AppListDisplay
        apps={p5jsProjects}
        displayApp={(app: any) => <P5App app={app} />}
        subRoute="p5art"
      />
    </div>
  );
};

export default P5Art;
