import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import contact from "../information/contact.json";

import links from "../information/links.json";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Grid container>
        <Grid xs={isMobile ? 12 : 8}>
          <h1 className="title">Lets talk!</h1>
          <Stack spacing={2} mb={8} textAlign={"center"}>
            {contact.map((item) => {
              const body = <div>{item.name}</div>;

              return (
                <Box>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </Box>
              );
            })}
          </Stack>
        </Grid>
        <Grid xs={isMobile ? 12 : 4} textAlign={isMobile ? "center" : "left"}>
          <h1>Quick Links</h1>
          <Stack spacing={2} mb={8}>
            {links.map((link) =>
              link.ids.map((id) => {
                return (
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    moisestrejo.com/{id}
                  </a>
                );
              })
            )}
          </Stack>
        </Grid>
      </Grid>

      <p>moisestrejo.com/contact</p>
      <img
        alt="qr-code"
        src={process.env.PUBLIC_URL + `/images/qr-code.png`}
        style={{ width: isMobile ? "90%" : "400px", marginBottom: "120px" }}
      ></img>

      <p>moisestrejo.com/linkedin</p>
      <img
        alt="qr-code"
        src={process.env.PUBLIC_URL + `/images/linkedinQR.png`}
        style={{ width: isMobile ? "90%" : "400px", marginBottom: "120px" }}
      ></img>
    </Stack>
  );
};
export default Contact;
