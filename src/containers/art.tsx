import { Box, useMediaQuery, useTheme } from "@mui/material";

import { useState } from "react";
import artList from "../information/art.json";
import { useNavigate, useParams } from "react-router-dom";

const Art = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const { id } = useParams();
  const navigate = useNavigate();
  const initialApp = artList.find(app => app.img === id) || artList[0];

  const [activeApp, setActiveApp] = useState(initialApp);

  const setActiveAppAndRoute = (app: any) => {
    setActiveApp(app)
    navigate(`/art/${app.img}`);
  }


  return (
    <Box display={"flex"} width={"100%"} mb={"100px"}>
      <Box width={"20%"} pl={isMobile ? "8px" : "64px"}>
        {artList.map((app) => {
          return (
            <div
              style={{
                textAlign: "left",
                width: "fit-content",
                textDecoration: app === activeApp ? "underline" : "none",
                cursor: "pointer",
              }}
              onMouseEnter={() => setActiveAppAndRoute(app)}
            >
              <b>
                <p style={{ width: "fit-content", textAlign: "left" }}>
                  {app.text}
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
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        height={"100vh"}
      >
        <h3>{activeApp.text}</h3>

        <img
          style={{ maxHeight: "80vh", margin: 0, padding: 0, maxWidth: "80%" }}
          src={process.env.PUBLIC_URL + `/images/art/${activeApp.img}`}
          alt={activeApp.img}
          className="nice-border"
        ></img>
      </Box>
    </Box>
  );
};

export default Art;
