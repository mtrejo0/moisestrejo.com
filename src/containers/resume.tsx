import React from "react";

const Resume = () => {
  let id = "17BKQrfpLi5IcTNLteQFf-x9ryXTra822";
  let preview = `https://drive.google.com/file/d/${id}/preview`;
  let view = `https://drive.google.com/file/d/${id}/view`;
  return (
    <div className="center">
      <a href={view}>
        <button className={"button download-button"}>Download</button>
      </a>
      <iframe title={"resume"} className={"pdf"} src={preview} />
    </div>
  );
};
export default Resume;
