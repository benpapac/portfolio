import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const json = require('./Projects.json');
    const [projects, setProjects] = useState([]); 

     const getProjects = async () => {
        try {
        setProjects(json);
            console.log(projects);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect( () => {
        getProjects();
    })

    return (
        <div className="projects-main">
            <h1 className="headline">Projects</h1>
            <section className="project-list">

            {projects.map(project => {
                return (
                    <div className="project" >
                        <h3 className="title">{project.title}</h3>
                        <p>{project.summary}</p>
                        <img className="screencap" src={project.image} alt={project.alts.image}/>
                        <a href={project.link} alt={project.alts.link}>See the project here</a>
                        <a href={project.repo} alt={project.alts}> Or, go to the repo</a>
                    </div>
                )
            })}
            </section>
        </div>
    );
};

export default Projects;