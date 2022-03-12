import { useState, useEffect } from 'react';
import './Projects.css';
import projects from './Projects.json';
import ProjectSlides from '../Slideshow/ProjectSlides';

const Projects = () => {
    // const [projects, setProjects] = useState([]);
    const projectSlides = projects.map(project => {
                return (
                    <>
                        <h3 className="title">{project.title}</h3>
                        <img className="screencap" src={project.image} alt={project.alts.image}/>
                        <p className="summary">{project.summary}</p>
                        <a href={project.link} alt={project.alts.link}>See the project here</a>
                        <br/>
                        <a href={project.repo} alt={project.alts}> Or, go to the repo</a>
                    </>
                )})

    return (
        <div className="projects-main">
            <ProjectSlides slideshow={projectSlides}/>
        </div>
    );
};

export default Projects;