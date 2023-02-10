import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../Slideshow/Slideshow';
import resume from '../../assets/Ben Papac Resume.pdf';
import './Nav.css';

const Nav = () => {
 const slideshow = [
        <p>React</p>,
        <p>Javascript</p>,
        <p>CSS</p>,
        <p>HTML</p>,
        <p>Postgres</p>,
        <p>Python</p>,
        <p>MongoDB</p>,
    ]
    return ( 
        // Add my Name in a cool font to the Nav
        // turn Resume into a real link to a pdf
        //store pdf in public or src folder, look React Static files >> 
       <section className='Nav'>
        <Link className='link' to="/">Ben Papac</Link>
        
        {/* <Link className='link' to="/thoughts">Thoughts</Link> */}
        <Link className='link' to="/projects">
                Projects: <Slideshow className="nav-slides" slideshow={slideshow} />
        </Link>
        {/* <Link className="link" to="../../assets/_Ben Papac Dev Resume.pdf">Resume</Link> */}
        <Link to={resume} 
            className='link'
            target='_blank' 
            rel='noreferrer noopener'
            alt='resume'
        >
            Resume
        </Link>
       </section>
    );
};

export default Nav;