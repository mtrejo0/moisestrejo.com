import React from "react";
import ResumePlusPlus from "./resume++";

const Resume = () => {
  let id = "17BKQrfpLi5IcTNLteQFf-x9ryXTra822";
  let preview = `https://drive.google.com/file/d/${id}/preview`;
  let view = `https://drive.google.com/file/d/${id}/view`;
  return (
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
  );
};
export default Resume;
