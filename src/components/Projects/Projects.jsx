import { useState, useEffect, useRef } from 'react';
import './Projects.css';
import projects from './Projects.json';
import ProjectSlides from '../Slideshow/ProjectSlides';
import { ProjectContext } from '../../Context';

const Projects = () => {
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const refs = {
        0: useRef(null),
        1: useRef(null),
        2: useRef(null),
        3: useRef(null)        
    }
//  useEffect( () => {
//         if (clicked) return;
//         else setTimeout(  () => {
//              setCount(() => count === projects.length-1 ? 0 : count + 1);
//             }, 10000)
//         }, [count]);
        
    const projectSlides = projects.map(project => {
                return (
                    <div id={project.title} ref={refs[`${projects.indexOf(project)}`]} className="project">
                        <h3 className="title">{project.title}</h3>
                        <img className="screencap" src={project.image} alt={project.alts.image}/>
                        <div className='project-copy'>
                            <p className="summary">{project.summary}</p>
                            <a href={project.link} alt={project.alts.link}>See the project here</a>
                            <br/>
                            <a href={project.repo} alt={project.alts}>Or, go to the repo</a>
                        </div>
                    </div>
                )})

    const  handleClick = (e) => {
        if(!clicked) setClicked(true);
        // setCount(e.target.id);
        refs[e.target.id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
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
        <ProjectContext.Provider 
        value={{
            projectSlides: projectSlides,
            thumnails: thumbnails,
            // count: count,
        }}>
        <div className="projects-main">
            {/* <ProjectSlides /> */}
            {projectSlides}
        </div>
        <footer className='thumbnail-box'>
        {thumbnails}
        </footer>

        </ProjectContext.Provider>
    );
};

export default Projects;