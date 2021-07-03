import React from 'react'

import '../styles/resume.css'

import pdf from "../information/Resume.pdf";
import Education from './education';

class Resume extends React.Component {

    render() {
        let id = "17BKQrfpLi5IcTNLteQFf-x9ryXTra822";
        let src = `https://drive.google.com/file/d/${id}/preview`
        return (
            <div class = "center">
                <a href={pdf} download>
                    <button class={'button download-button'}>Download</button>
                </a>
                <iframe title={'resume'} className={'pdf'} src={src}/>
                <Education></Education>
            </div>
        );
    }
}
export default Resume;
