import React from 'react'

import '../styles/education.css'

import classes from '../information/classes.json'

const EducationItem = ({education}) => {
    return <div class="education-item  center">
        <strong><p>{education.course}-{education.name}</p></strong>
        <p>{education.description}</p>
    </div>
};


class Education extends React.Component {

    render() {

        let classList = classes.map( course => course.course).join(', ')

        return(
            <div>
                <h1 class="title">Relevant Course Work</h1>
                <br/>
                <p>{classList}</p>
                <div class="center">
                    {classes.map(education => {
                        return <EducationItem education={education}></EducationItem>
                    })}
                </div>
            </div>

        )
    }
}

export default Education;