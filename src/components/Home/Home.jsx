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
        <>
            <img  className='background-img' src="https://i.imgur.com/kAajrl0.jpg" alt="Ben holding a cat" />
            <div className="see-through" > </div>

            <h1 className="home-name">Ben <br/>Papac</h1>

            <Slideshow className="home-slides" slideshow={slideshow} />
            <div className="home-blurb">
                {/* <img src="https://i.imgur.com/BxDTG47.jpg" alt="Ben holding a cat" /> */}
                <h1>It's a pleasure to meet you.</h1>
                <p>My name's Ben. I’m a software engineer, trained in full-stack web development at General Assembly, and I tell stories online. Human connection  is the driving force behind everything I do in life. I produce compelling, beautiful, crystal-clear products that bring people together, and I help make complex ideas easy to engage with.</p>
            </div>
                
            <div className="home-blurb" style={{backgroundColor: 'rgba(255,255,255, 0.7)'}}>
                <h1>Projects</h1>
                <p >I'm trained in Javascript (React, Express, Mongoose) and Python(Postgres), but my longterm passion is game dev! You'll see that in Onitama, or my new Chess App, along with my growing Front End skills.</p>
                <Link className="home-link" to="/projects">Check them out here.</Link>
            </div>
        </>
    );
};

export default Home;