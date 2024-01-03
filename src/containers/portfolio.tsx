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
  

  const keywords = ["cloud", "youtube", "github"];
  const includesKeyword = keywords.some(keyword => app.link.includes(keyword));


  return (
    <Box className="nice-border" height={"100%"} sx={{ backgroundColor: 'white' }}>
      <Grid container>
        <Grid xs={12}>
          <h1>{app.name}</h1>
        </Grid>
        <Grid xs={8}>
          <a
            href={app.link}
            style={{ textDecoration: "none", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
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
          {includesKeyword ? 
          null
          : 
          <iframe
              src={app.link}
              title={app.id}
              width="100%"
              height="1000px"
            />
          }
        </Grid>

        
      </Grid>
    </Box>
  );
};

const Porfolio = () => {

  return (
    <div>
      <AppListDisplay apps={externalApps} displayApp={(app: any) => <ExternalApp app={app}/>} subRoute = "portfolio"/>
    </div>
  );
};

export default Porfolio;
