import { useEffect, useRef, useState } from 'react';
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
            block: 'end',
        });
    }, []);
        
    const projectSlides = projects.map((project, index) => {
                return (
                    <div id={project.title} ref={refs[`${projects.indexOf(project)}`]} className={`project ${index % 2 ? 'left' : 'right'}`}>
                        <img className="screencap" src={project.image} alt={project.alts.image}/>
                        <p className='highlights'>{project.highlights}</p>
                        <div className='project-copy'>
                        <h3 className="title">{project.title}</h3>
                            <p className="summary">{project.summary}</p>
                            <div className='links-box'>
                            <a href={project.link} alt={project.alts.link} className='project-link' rel="noreferrer" target="_blank">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                            </a> 
                            <a href={project.repo} alt={project.alts.repo} className='project-link' rel="noreferrer" target="_blank" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )})

    const  handleClick = (e) => {
        refs[e.target.id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }

    const thumbnails = projects.map((project, index) => {

        return (
            // github octocat icon for repo, 
            // open new tab icon for website link
            //alternate image to text  left/right alignment in layout.
            //most impressive to least impressive in organization.
            //include at least one group project.
            //caption under each image, key techs/ideas.
            <>
            <div id={index} key={index} className={`thumbnail`} onClick={handleClick}>
                <img id={index} className='thumbnail-image' src={project.image} alt={project.alts.image} />
                <h4 id={index}>{project.title}</h4>
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