import React from 'react'
import './resume.scss'

import pdf from './Moises_Trejo_Resume.pdf';
import Education from '../education/education';

class Resume extends React.Component {

    render() {
        let id = "1kF2FEqdvBEcCksgv8rMmDxnlfD3vDUaL"
        let src = `https://drive.google.com/file/d/${id}/preview`
        return (
            <div class = "center margintop32">
                <a href={pdf} download>
                    <button class={'button'}>Download</button>
                </a>
                <iframe title={'resume'} className={'pdf'} src={src}/>
                <Education></Education>
            </div>
        );
    }
}
export default Resume;
