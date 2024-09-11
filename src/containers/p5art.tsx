import p5jsProjects from "../information/p5jsProjects.json";

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import AppListDisplay from "../components/AppListDisplay";

export const P5App = ({ app }: { app: any }) => {
  const link = `https://moisestrejo.com/${app.id}`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="nice-border" height="100%" style={{ background: "white" }}>
      <Grid container>
        <Grid xs={12} marginBottom={4} sx={{ textAlign: 'center' }}>
          <h1>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {app.name}
            </a>
          </h1>
          {app.description.map((each: any) => (
            <p style={{ color: "black" }}>{each}</p>
          ))}
          
        </Grid>
        <Grid xs={12}>

          

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
              src={`https://p5moises-27cba0c96786.herokuapp.com/${app.id}`}
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
    <div>
      <AppListDisplay
        apps={p5jsProjects}
        displayApp={(app: any) => <P5App app={app} />}
        subRoute="p5art"
      />
    </div>
  );
};

export default P5Art;
