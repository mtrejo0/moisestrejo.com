import React from 'react'

import '../styles/resume.css'

import Education from './education';

class Resume extends React.Component {

    render() {
        let id = "17BKQrfpLi5IcTNLteQFf-x9ryXTra822";
        let preview = `https://drive.google.com/file/d/${id}/preview`
        let view = `https://drive.google.com/file/d/${id}/view`
        return (
            <div class = "center">
                <a href={view}>
                    <button class={'button download-button'}>Download</button>
                </a>
                <iframe title={'resume'} className={'pdf'} src={preview}/>
                <Education></Education>
            </div>
        );
    }
}
export default Resume;
