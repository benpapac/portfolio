import React from 'react';
import './Projects.css';
import { useHistory } from 'react-router';
const Projects = () => {
    const history = useHistory();
    const projects = [
        {
            title: 'Onitama',
            image: 'image',
            link: 'link',
            repo: 'repo',
            summary: 'Welcome to Onitama! Published by Arcane Wonders in 2014, and designed by Shimpei Sato, Onitama is a delightful strategy game loosely related to Chess. Players move their pawns using cards that they pass back and forth as they play. Once someone captures their opponent\'s sage, or moves their own sage to their opponent\'s temple, they win!',
             alts: {
                image: 'alt',
                link: 'alt',
                repo: 'alt'
                }

    },
     {
            title: 'TGIPH',
            image: 'image',
            link: 'link',
            repo: 'repo',
            summary: '"Thank God I\'m Post-Human," is the story of one bot\'s quest to seek revenge on the humans that made it. As the player lands on the site, they\'re led to believe that they\'re signing into a gif search app powered by Giphy. Little do they know, that buried in the submit button on the sign-in form is a cunning piece of malware...',
            alts: {
                image: 'alt',
                link: 'alt',
                repo: 'alt'
                }

    },
     {
            title: 'Tou:Ring',
            image: 'image',
            link: 'link',
            repo: 'repo',
            summary: 'Tou:Ring is a simple application designed for exploring and sharing attractions in any city around the world. Leveraging a streamlined, flexible API, Tou:Ring could easily be expanded into a robust social network, allowing "Rings" of friends to compare their favorite spots and plan group outings.',
            alts: {
                image: 'alt',
                link: 'alt',
                repo: 'alt'
                }

    },
     {
            title: 'Wandr',
            image: 'image',
            link: 'link',
            repo: 'repo',
            summary: 'summary',
            alts: {
                image: 'alt',
                link: 'alt',
                repo: 'alt'
                }

    }
]


    return (
        <>
            <h1 className="headline">Hello from Projects</h1>
            <section className="project-list">

            {projects.map(project => {
                return (
                    <div className="project" >
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        <img src={project.image} alt={project.alts.image}/>
                        <a href={project.link} alt={project.alts.link}/>
                        <a href={project.repo} alt={project.alts}/>
                    </div>
                )
            })}
            </section>
        </>
    );
};

export default Projects;