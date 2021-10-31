import React from "react";
import './Home.css';

const Home = () => {

    return (
        <div className="intro-box">
            <div className="intro">
                <h1>It's a pleasure to meet you.</h1>
                <p>My name's Ben. I’m a software engineer, trained in full-stack web development at General Assembly, and I tell stories online. <br/><br/> Human connection  is the driving force behind everything I do in life.<br/><br/> I produce compelling, beautiful, crystal-clear products that bring people together, and I help make complex ideas easy to engage with.</p>
            </div>

            <div className="skills">
            <ul>Skills</ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>PostGres</li>
            </div>
           
        </div>
    );
};

export default Home;