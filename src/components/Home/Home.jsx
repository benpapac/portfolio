import { useHistory, useParams, } from "react-router";
import { useState, useContext } from "react";
import './Home.css';

const Home = () => {
    const history = useHistory();

    const handleClick = (event) => {
        console.log(event);
        if (event.target.id === 'acting') history.push('/acting'); 
        else  history.push('/programming');

    }

    const lBlock = {
        name: 'l',
        shape: {
            one: [1, 1],
            two: [2,1],
            three: [3,1],
            four: [3, 2]
        }
    }

    // const make = (block) => {
    //     return(
    //         <div className={block.name} id={blocks.indexOf(block.name)} 
    //             style={ {'grid-row': `${block.row}` } } />
    //     )
    // }
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