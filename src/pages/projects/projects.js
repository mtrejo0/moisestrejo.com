import React from 'react'

import './projects.scss'

import projects from './projects.json'

const ProjectItem = ({project}) => {
    return <div class="list-item center">
        <a href={project.link}><h3>{project.name}</h3></a>
        <a href={project.link}><img class="project-image" src={process.env.PUBLIC_URL + `/images/${project.img}`} alt={project.img} /></a>
        <br></br>
        <p>{project.description}</p>
    </div>
};

class Projects extends React.Component {
    render() {
        return(
            <div class="project-grid">
                {
                    projects.map(project => {
                        return <div class="project-item center">
                            <ProjectItem project={project}/>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Projects;
