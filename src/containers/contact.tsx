import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import contact from "../information/contact.json";

import links from "../information/links.json";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="center">
      <h1 className="title">Lets talk!</h1>
      <div className="nice-border">
        <a
          href={"https://forms.gle/yJRmC6x1C7oq1sVu8"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Send me a message!
        </a>
      </div>

      <Grid container>
        {contact.map((item) => {
          const body = (
            <div className="nice-border">
              {item.icon ? (
                <img src={item.icon} style={{ width: "100px" }}></img>
              ) : (
                <p>{item.name}</p>
              )}
              <p>{item.description}</p>
            </div>
          );

          return (
            <Grid item xs={isMobile ? 6 : 3}>
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
            </Grid>
          );
        })}
      </Grid>
      <h1 className="title">Quick Links</h1>
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
    </div>
  );
};
export default Contact;
