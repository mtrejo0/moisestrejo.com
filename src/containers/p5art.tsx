import p5jsProjects from "../information/p5jsProjects.json";

import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";

import { PortfolioItem } from "./portfolio";


const P5Art = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="center">
      <Grid container sx={{mt: 4}}>
        {p5jsProjects.map((item) => {
          return (
            <Grid item xs={isMobile ? 12 : 4}>
              <PortfolioItem item={item} p5 />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default P5Art;
