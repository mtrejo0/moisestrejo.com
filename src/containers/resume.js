import React from 'react'

class Resume extends React.Component {

    render() {
        let id = "17BKQrfpLi5IcTNLteQFf-x9ryXTra822";
        let preview = `https://drive.google.com/file/d/${id}/preview`
        let view = `https://drive.google.com/file/d/${id}/view`
        return (
          <div class="center">
            <a href={view}>
              <button class={"button download-button"}>Download</button>
            </a>
            <iframe title={"resume"} className={"pdf"} src={preview} />
          </div>
        );
    }
}
export default Resume;
