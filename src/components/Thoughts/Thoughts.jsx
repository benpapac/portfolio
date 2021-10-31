import {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import './Thoughts.css';
import './Thoughts.json';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';



const Thoughts = () => {
    const json = require('./Thoughts.json');
    const [thoughts, setThoughts] = useState([]);
    const [lastScroll, setLastScroll] = useState(0);

    const assets = '../../assets/';
    const photos = [
        { url: `../../assets/Chris_Labadie_1.jpg`, devUrl: `https://i.imgur.com/BxDTG47.jpg`, alt: 'Ben in a crisp button-down'}, 
        { url: `${assets}Josie_Elle_2.jpg`, devUrl: `https://i.imgur.com/L3endD3.jpg`, alt: 'Ben in leather jacket with tangled hair'},
        { url: `${assets}Josie_Elle_3.jpg`, devUrl: `https://i.imgur.com/sNrBH3q.jpg`, alt: 'Ben in leather jacket with tangled hair'},
        { url: `${assets}Josie_Elle_4.jpg`, devUrl: `https://i.imgur.com/kAajrl0.jpg`, alt: 'Ben close-up in a biker jacket'}, 
        { url: `${assets}Josie_Elle_5.jpg`, devUrl: `https://i.imgur.com/ywiOVwJ.jpg`, alt: 'Ben in leather jacket with tangled hair'}, ];
        
    const [photo,setPhoto] = useState(photos[Math.floor(photos.length/2)]);
    const [nextPhoto,setNextPhoto] = useState(photos[photos.indexOf(photo)+1]);



    const getThoughts = async () => {
        try {
        // const result = json.json();
        setThoughts(json);
            console.log(thoughts);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect( () => {
       getThoughts();
        }
    );
    
    return (
        <div className="thoughts-main">
        <section className="thought-list" >
            {thoughts.map(thought => {
                return (
                <div className="thought">
                <h2>{thought.headline}</h2>
                <h3 className='date'>{thought.date}</h3>
                <p className="body">{thought.blurb}</p>
                <a className='medium' href={thought.link}>read more</a>
                </div>
                );
            })}
        </section>

        </div>


);
};

export default Thoughts;