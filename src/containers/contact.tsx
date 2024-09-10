import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

import contact from "../information/contact.json";
import links from "../information/links.json";

const ListItems = ({ items }: { items: any }) => {
  return (
    <ul>
      {items.map((item: any, index: number) => (
        <li key={index} style={{ marginBottom: "8px" }}>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
            >
              <div>{item.name}</div>
            </a>
          ) : (
            <div>{item.name}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Grid container>
        <Grid xs={isMobile ? 12 : 6}>
          <h2 style={{ textAlign: "center" }}>Connect</h2>
          <Stack spacing={2} mb={8} alignItems={"center"}>
            <ListItems items={contact} />
          </Stack>
        </Grid>
        <Grid xs={isMobile ? 12 : 6}>
          <h2 style={{ textAlign: "center" }}>Quick Links</h2>
          <Stack spacing={2} mb={8} alignItems={"center"}>
            <ListItems
              items={links
                .filter((each) => !each.link.includes("calendly"))
                .flatMap((link) => link.ids)
                .map((each) => ({
                  link: each,
                  name: "moisestrejo.com/" + each,
                }))}
            />
          </Stack>
        </Grid>
      </Grid>

      {[
        { text: "moisestrejo.com/contact", imgSrc: "/images/qr-code.png" },
        { text: "moisestrejo.com/linkedin", imgSrc: "/images/linkedinQR.png" },
      ].map((item, index) => (
        <Stack sx={{ alignItems: "center" }}>
          <p>{item.text}</p>
          <img
            alt="qr-code"
            src={process.env.PUBLIC_URL + item.imgSrc}
            style={{ width: isMobile ? "90%" : "400px", marginBottom: "120px" }}
          ></img>
        </Stack>
      ))}
    </Stack>
  );
};

export default Contact;
