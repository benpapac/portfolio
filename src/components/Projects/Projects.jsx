import { useEffect, useRef } from 'react';
import './Projects-Phone.css';
import './Projects.css';
import projects from './Projects.json';

const Projects = () => {
    const refs = {
        0: useRef(null),
        1: useRef(null),
        2: useRef(null),
        3: useRef(null)        
    }

    useEffect ( () => {
        refs[0].current.scrollIntoView({
            block: 'center',
        });
    }, []);
        
    const projectSlides = projects.map(project => {
                return (
                    <div id={project.title} ref={refs[`${projects.indexOf(project)}`]} className="project">
                        <img className="screencap" src={project.image} alt={project.alts.image}/>
                        <div className='project-copy'>
                        <h3 className="title">{project.title}</h3>
                            <p className="summary">{project.summary}</p>
                            <a href={project.link} alt={project.alts.link} className='project-link' rel="noreferrer" target="_blank">
                                See the project here
                            </a>
                            <br/>
                            <a href={project.repo} alt={project.alts.repo} className='project-link' rel="noreferrer" target="_blank" >
                                Or, go to the repo
                                </a>
                        </div>
                    </div>
                )})

    const  handleClick = (e) => {
        refs[e.target.id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }

    const thumbnails = projects.map((project, index) => {
        return (
            <>
            <div key={index} id={index} className='thumbnail' onClick={handleClick}>
                <img id={index} className='thumbnail-image' src={project.image} alt={project.alts.image} />
                <p id={index} >{project.title}</p>
            </div>
            </>
        )
    })

    return (
        <>
        <div className="projects-main">
            {projectSlides}
        </div>
        <footer className='thumbnail-box'>
            {thumbnails}
        </footer>
        </>
    );
};

export default Projects;