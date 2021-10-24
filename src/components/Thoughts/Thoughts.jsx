import {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import './Thoughts.css';
import './Thoughts.json';
import axios from 'axios';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';



const Thoughts = () => {
    const json = require('./Thoughts.json');
    const history = useHistory();
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

    const getScrollDirection = (event) => {
        let scroll = event.target.scrollTop;
        if (scroll - lastScroll <= -10){
            setLastScroll(scroll);
            return 'up'
        } 
        else {
            setLastScroll(scroll);
            return 'down';
        }
    }

    const handleScroll = (event) => {
        let direction = getScrollDirection(event);
        if (direction === 'up') handleScrollUp();
        else handleScrollDown();
        console.log(direction);
    }

    const handleScrollUp = async (event) => {
        try {
            let newPhoto;
            let preloadPhoto;
            if(photos.indexOf(photo) === photos.length-2) {
                newPhoto = await  setPhoto(nextPhoto);
                preloadPhoto = await setNextPhoto(photos[0]);
            } else {
                newPhoto = await setPhoto(nextPhoto);
                preloadPhoto = await setNextPhoto(photos[photos.indexOf(photo)+1]);
            }
            console.log(newPhoto, preloadPhoto);

        } catch(err){

            console.log(err)
        }
    }

        const handleScrollDown = async (event) => {
            try {
                let newPhoto;
                let preloadPhoto;
                if(photos.indexOf(photo) === 1) {
                 newPhoto = await setPhoto(nextPhoto);
                 preloadPhoto = await setNextPhoto(photos[photos.length -1]);
            } else {
                 newPhoto = await setPhoto(nextPhoto);
                 preloadPhoto = await setNextPhoto(photos[photos.indexOf(photo)-1]);
            }
            console.log(newPhoto, preloadPhoto);
            } catch (err) {
                console.log(err)
            }
            
        }

    
    return (
        <>
        <section className="thought-list" >
            {thoughts.map(thought => {
                return (
                <div className="thought">
                <h3>{thought.headline}</h3>
                <h6 className='date'>{thought.date}</h6>
                <p className="body">{thought.blurb}</p>
                <a className='medium' href={thought.link}>read more</a>
                </div>
                );
            })}
        </section>

        <ReactScrollWheelHandler className="background"
            upHandler={handleScrollUp}
            downHandler={handleScrollDown}>
            {/* {photos.map(photo => { */}
                {/* return( */}
                    <img className="photo" src={photo.devUrl} alt={photo.alt} />
                {/* ); */}
            {/* } */}
            {/* )} */}
        </ReactScrollWheelHandler>
        </>


);
};

export default Thoughts;