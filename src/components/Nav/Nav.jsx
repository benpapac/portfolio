import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        // Add my Name in a cool font to the Nav
        // turn Resume into a real link to a pdf
        //store pdf in public or src folder, look React Static files >> 
       <>
        <Link className='link' to="/">Home</Link>
        
        {/* <Link className='link' to="/thoughts">Thoughts</Link> */}
        <Link className='link' to="/projects">Projects</Link>
        {/* <Link className="link" to="../../assets/_Ben Papac Dev Resume.pdf">Resume</Link> */}
        <a href='../../assets/_Ben Papac Dev Resume.pdf' alt='resume'>Resume</a>
       </>
    );
};

export default Nav;