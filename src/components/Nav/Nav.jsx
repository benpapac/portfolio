import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
       <>
        <Link className='link' to="/">Home</Link>
        
        <Link className='link' to="/thoughts">Thoughts</Link>
        <Link className='link' to="/projects">Projects</Link>
        <Link className="link" to="/resume">Resume</Link>
       </>
    );
};

export default Nav;