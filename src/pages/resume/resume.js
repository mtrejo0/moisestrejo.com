import React from 'react'
import './resume.scss'
import {Button} from "react-bootstrap";

import pdf from './Moises_Trejo_Resume.pdf';

class Resume extends React.Component {

    render() {
        let src = 'https://drive.google.com/file/d/1l2UjqfWXPygqQTMqg2OrpuIN4QYw6zRu/preview'
        return (
            <div className={"wrapper"}>
                <Button className={'download'} href={pdf} download>Download</Button>
                <iframe title={'resume'} className={'pdf'} src={src}/>
            </div>
        );
    }
}
export default Resume;
