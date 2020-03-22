import React from 'react'
import './resume.scss'

class Resume extends React.Component {

    render() {

        return (
            <div>
                <iframe title={'resume'} className={'pdf'} src="https://drive.google.com/file/d/1pnVasTM2RSa3TIzVtttNQygZIdk6sStO/preview"/>
            </div>
        );
    }
}
export default Resume;
