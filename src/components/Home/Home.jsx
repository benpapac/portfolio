import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
import projects from '../Projects/Projects.json';
import './Home-Phone.css';
import './Home.css';

const Home = () => {
    const [toggler, setToggler] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect( () => {
        setTimeout(  () => {
                if(toggler){
                    setIndex(index === projects.length-1 ? 0 : index + 1);
                }
                setToggler((toggler) => !toggler ? true : false);
            }, 4000)
        }, [toggler]);

    const slideshow = [
        <p>React</p>,
        <p>Javascript</p>,
        <p>CSS</p>,
        <p>HTML</p>,
        <p>Postgres</p>,
        <p>Python</p>,
        <p>MongoDB</p>,
    ]

    const thumbnails = projects.map((project, index) => {
        return (
            <>
            <div key={index} id={index} className='thumbnail'>
                <img id={index} className='thumbnail-image' src={project.image} alt={project.alts.image} />
                <p id={index} >{project.title}</p>
            </div>
            </>
        )
    })

    return (
        <>
            <img  className='background-img' src="https://i.imgur.com/kAajrl0.jpg" alt="Ben holding a cat" />
            <div className="see-through" > </div>

            <div className="home-name-box">
                <h1 className="home-name">Ben <br/>Papac</h1>
                <Slideshow className="home-slides" slideshow={slideshow} />
            </div>

            <div className="home-blurb">
                {/* <img src="https://i.imgur.com/BxDTG47.jpg" alt="Ben holding a cat" /> */}
                <h1>It's a pleasure to meet you.</h1>
                <p>I’m a software engineer, trained in full-stack web development at General Assembly, and I tell stories online.<br/><br/> Human connection  is the driving force behind everything I do in life. <br/><br/>I produce compelling, beautiful, crystal-clear products that bring people together, and I help make complex ideas easy to engage with.</p>
            </div>
                
            <div className="home-blurb" style={{backgroundColor: 'rgba(255,255,255, 0.7)'}}>
                <div className="home-blurb-copy">
                <h2>Projects</h2>
                <p >I'm trained in Javascript <br/>(React, Express, Mongoose) <br/>and Python(Postgres), but my longterm passion is game dev! You'll see that in Onitama, or my new Chess App, along with my growing Front End skills.</p>
                <Link className="home-link" to="/projects">Check them out here.</Link>
                </div>
                    <div className="home-blurb-thumbnail">
                { toggler ? 
                    <>
                         <img src={projects[index].image}/>
                        <p>{projects[index].title}</p>
                    </>
                    : null
                    }
                    </div>
            </div>
        </>
    );
};

export default Home;