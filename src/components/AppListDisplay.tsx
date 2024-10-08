import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useState } from "react";

const AppListDisplay = ({
  apps,
  displayApp,
  subRoute,
  skipRoute,
}: {
  apps: any;
  displayApp: (app: any) => React.ReactNode;
  subRoute: string;
  skipRoute?: boolean;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { id } = useParams();
  const navigate = useNavigate();
  const initialApp =
    apps.find((app: any) => app.id === id) ||
    apps[Math.floor(Math.random() * apps.length)];

  const [activeApp, setActiveApp] = useState(initialApp);

  const setActiveAppAndRoute = (app: any) => {
    setActiveApp(app);
    if (!skipRoute) navigate(`/${subRoute}/${app.id}`);
  };

  const setActiveAppDropdown = (appName: string) => {
    const newApp = apps.find((app: any) => app.name === appName) || apps[0];
    setActiveAppAndRoute(newApp);
  };

  return (
    <div>
      <Box
        display={"flex"}
        mt={!isMobile ? "32px" : "0px"}
        mb={"100px"}
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : "unset"}
      >
        {isMobile ? (
          <FormControl sx={{ width: "90vw", borderColor: "black" }}>
            <InputLabel id="app-dropdown-label">Select</InputLabel>
            <Select
              labelId="app-dropdown-label"
              id="app-dropdown"
              value={activeApp.name}
              label="Select"
              onChange={(event) => setActiveAppDropdown(event.target.value)}
              sx={{
                marginBottom: "16px",
                borderColor: "black",
                backgroundColor: "white",
              }}
            >
              {apps.map((app: any) => (
                <MenuItem key={app.id + "_select"} value={app.name}>
                  {app.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <Box width={"20%"} pl={isMobile ? "8px" : "64px"}>
            {apps.map((app: any) => {
              return (
                <div
                  style={{
                    textAlign: "left",
                    width: "fit-content",
                    textDecoration: app === activeApp ? "underline" : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setActiveAppAndRoute(app)}
                  key={app.id}
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
        )}

        <Box
          width={isMobile ? "100%" : "80%"}
          mr={isMobile ? "8px" : "64px"}
          ml={isMobile ? "8px" : "16px"}
        >
          {displayApp(activeApp)}
        </Box>
      </Box>
    </div>
  );
};

export default AppListDisplay;
