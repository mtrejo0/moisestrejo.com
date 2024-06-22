import { Box, useMediaQuery, useTheme, IconButton } from "@mui/material";
import {
  LinkedIn,
  Instagram,
  GitHub,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import contactData from "../information/contact.json";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconMap = {
    Twitter: Twitter,
    Youtube: YouTube,
    LinkedIn: LinkedIn,
    Instagram: Instagram,
    Github: GitHub,
  };

  return (
    <Box
      sx={{
        color: "#000",
        padding: "64px",
        borderTop: "1px solid black",
        marginTop: "128px",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: isMobile ? "center" : "left",
        display: "flex",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {contactData.map((contact) => {
            const Icon = iconMap[contact.name];
            return (
              contact.link &&
              Icon && (
                <IconButton
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={contact.name}
                >
                  <Icon />
                </IconButton>
              )
            );
          })}
        </Box>
      </Box>
      <p>© Moises Trejo Industries</p>
    </Box>
  );
};

export default Footer;
