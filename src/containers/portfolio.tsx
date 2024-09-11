// import internalApps from "../information/internalApps.json";
import externalApps from "../information/externalApps.json";

import Grid from "@mui/material/Grid";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import AppListDisplay from "../components/AppListDisplay";

// const InternalApp = ({ app }: { app: any }) => {
//   return (
//     <div
//       className="nice-border center"
//       style={{ textDecoration: "none", color: "inherit" }}
//     >
//       <NavLink to={`/${app.id}`}>
//         <h3>{app.name}</h3>
//       </NavLink>
//       <br></br>
//       <p>{app.description}</p>
//     </div>
//   );
// };

const ExternalApp = ({ app }: { app: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const keywords = ["cloud", "youtube", "github.com"];
  const includesKeyword = keywords.some((keyword) =>
    app.link.includes(keyword)
  );

  return (
    <Box
      className="nice-border"
      height={"100%"}
      sx={{ backgroundColor: "white" }}
    >
      <Grid container>
        <Grid xs={12} sx={{ textAlign: 'center' }}>
          <h1>
            <a
              href={app.link}
              target="_blank"
              rel="noreferrer"
            >
              {app.name}
            </a>
          </h1>
          <p><b>{app.description}</b></p>

          <p style={{ marginBottom: "32px" }}>{app.resources}</p>
        </Grid>
        <Grid xs={8}>
          

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
            
        </Grid>

        <Grid xs={12}>
          {includesKeyword || app.hide ? null : (
            <iframe
              src={app.link}
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

const Porfolio = () => {
  return (
      <AppListDisplay
        apps={externalApps}
        displayApp={(app: any) => <ExternalApp app={app} />}
        subRoute="portfolio"
      />
  );
};

export default Porfolio;
