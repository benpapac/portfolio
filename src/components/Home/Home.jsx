import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
import './Home.css';

const Home = () => {
    const slideshow = [
        'React',
        'Javascript',
        'CSS',
        'HTML',
        'Postgres',
        'MongoDB'
    ]

    return (
        <div className="intro-box">
            <div className="name-box">
            <h1 className="home-name">Ben Papac</h1>
            {/* <img src="https://i.imgur.com/BxDTG47.jpg" alt="Ben holding a cat" /> */}
                <Slideshow slideshow={slideshow} />
            </div>
            <aside className="intro">
                <div className="home-blurb">
                <h1>It's a pleasure to meet you.</h1>
                <p className='body'>My name's Ben. I’m a software engineer, trained in full-stack web development at General Assembly, and I tell stories online. Human connection  is the driving force behind everything I do in life. I produce compelling, beautiful, crystal-clear products that bring people together, and I help make complex ideas easy to engage with.</p>
                </div>
                <div className="home-blurb">
                <h2>Projects</h2>
                <p className="body">I'm trained in Javascript (React, Express, Mongoose) and Python(Postgres), but my longterm passion is game dev! You'll see that in Onitama, or my new Chess App, along with my growing Front End skills.</p>
                <Link className="home-link" to="/projects">Check them out here.</Link>
                </div>
            </aside>

            {/* <div className="skills">
            <ul>Skills</ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>PostGres</li>
            </div>
            */}
        </div>
    );
};

export default Home;