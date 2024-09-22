import React from "react";
import ResumePlusPlus from "./resume++";
import { useMediaQuery, useTheme } from "@mui/material";

const Resume = () => {
  let id = "17BKQrfpLi5IcTNLteQFf-x9ryXTra822";
  let preview = `https://drive.google.com/file/d/${id}/preview`;
  let view = `https://drive.google.com/file/d/${id}/view`;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div style={{ maxWidth: isMobile ? '100%' : '50%', margin: '0 auto'}}>
      <div className="center">
      <iframe title={"resume"} className={"pdf"} src={preview} />
      <a
        href={view}
        target="_blank"
        style={{ textDecoration: "underline", color: "black" }}
      >
        <p>Download Here</p>
      </a>
      <ResumePlusPlus />
    </div>
    </div>
  );
};
export default Resume;
