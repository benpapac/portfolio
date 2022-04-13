import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
import projects from '../Projects/Projects.json';
import './Home-Phone.css';
import './Home.css';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [text, setText] = useState('');
    const [underscore, setUnderscore] = useState('');
    const greeting = 'It\'s a pleasure to meet you.'
    useEffect( () => {

        setTimeout( () => {
            setCharIndex(
                charIndex === greeting.length ? 
                charIndex
                : charIndex+1 
             );
             setText(
                charIndex >= greeting.length ?
                    greeting
                    : text.concat(greeting[charIndex])
            );
         }, 150);

        //  setTimeout( () => {
        //       if(text === greeting ){
        //          setUnderscore(underscore ? '' : '_')
        //          };
        //  }, 150);
        setTimeout(  () => {
            setIndex(index === projects.length-1 ? 0 : index + 1);
            }, 4000)
        }, [index, text]);

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

        {/* Cut intro copy to one sentence. remove Projects copy. Only two panels, translucent. Button instead of link, simpler copy there. Add an accent font.  */}
            <img  className='background-img' src="https://i.imgur.com/kAajrl0.jpg" alt="Ben holding a cat" />
            <div className="see-through" > </div>

            <div className="home-name-box">
                <h1 className="home-name">Ben <br/>Papac</h1>
                <Slideshow className="home-slides" slideshow={slideshow} />
            </div>

            <div className="home-blurb">
                <h1>{text}{underscore}</h1>
                <p>I use the power of <span>storytelling</span> to help bring people together.</p>
                <div className="home-blurb-thumbnail">
                    <img src={projects[index].image} alt={projects[index].alts.image}/>
                    <p>{projects[index].title}</p>
                    <Link className="home-link" to="/projects">
                        Check out what I've built
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;