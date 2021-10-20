import {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import './Acting.css';


const Acting = () => {
    const history = useHistory();
    const assets = '../../assets/';
    const photos = [
        { url: `../../assets/Chris_Labadie_1.jpg`, devUrl: `https://i.imgur.com/BxDTG47.jpg`, alt: 'Ben in a crisp button-down'}, 
        { url: `${assets}Josie_Elle_2.jpg`, devUrl: `https://i.imgur.com/L3endD3.jpg`, alt: 'Ben in leather jacket with tangled hair'},
        { url: `${assets}Josie_Elle_3.jpg`, devUrl: `https://i.imgur.com/sNrBH3q.jpg`, alt: 'Ben in leather jacket with tangled hair'},
        { url: `${assets}Josie_Elle_4.jpg`, devUrl: `https://i.imgur.com/kAajrl0.jpg`, alt: 'Ben close-up in a biker jacket'}, 
        { url: `${assets}Josie_Elle_5.jpg`, devUrl: `https://i.imgur.com/ywiOVwJ.jpg`, alt: 'Ben in leather jacket with tangled hair'}, ];

        const [count, setCount] = useState(Math.floor(photos.length/2));
        const [scrollCount, setScrollCount] = useState(0);
        const [countPhoto, setCountPhoto] = useState(photos[count]);
        const [prev, setPrev] = useState(count-1);
        const [next, setNext] = useState(count+1);
        const [lastScrollPosition, setLastScrollPosition] = useState(0);
        const [ticking, setTicking] = useState(false);
        const [currentScrollY, setCurrentScrollY] = useState(null);
        const [scrollDir, setScrollDir] = useState('down');
        
        const [y, setY] = useState(window.scrollY);

        
        const requestTick = () => {
            if(!ticking) {
                requestAnimationFrame(update);
                setTicking(true);
                setScrollCount(scrollCount +1);
                console.log('scroll count: ', scrollCount);
            };
        };
            
            const update = () => {
                console.log('we\'re updating')
                setTicking(false);
                return setCurrentScrollY(lastScrollPosition);
            }
            
            const handleCount = async () => {
                if(y - lastScrollPosition > 0){
                if(count === photos.length -1) console.log('we\'re at the end')
                // switch(count) {
                    if(count === 0){
                        await setCount(1);
                        setPrev(photos.length - 1);
                        setNext(2);
                    }else  if(count === (photos.length -1)){
                        await  setCount(0) ;
                        setPrev(photos.length -1);
                        setNext(1);
                    } else if(count === (photos.length -2)){
                        console.log('test index 3');
                        setCount(count+1);
                        setPrev(count);
                        await  setNext(0);
                    } else{
                        console.log('we\'re in default')
                        setCount(count+1);
                        setLastScrollPosition(y);
                        setNext(count +2);
                    }
                }

                if(y - lastScrollPosition < 0){
                    if(count === 0){
                        await setCount(photos.length-1);
                        setPrev(0);
                        setNext(photos.length - 2);
                    }else  if(count === (photos.length -1)){
                        setCount(count -1) ;
                       await setPrev(photos.length - 1);
                        setNext(count -2);
                    } else if(count === (1)){
                        console.log('test index -3');
                        setCount(0);
                        setPrev(1);
                        await  setNext(photos.length - 1);
                    } else{
                        console.log('we\'re in default')
                        setCount(count-1);
                        setPrev(count);
                        setNext(count -2);
                    }
                    
                    
                }
                
                setLastScrollPosition(y);
                    console.log(prev, count, next);
                    console.log(photos[next]);
                }
    const handleScroll = (event) => {
       setY(event.target.scrollTop);
      console.log(y);
        if(Math.abs(y - lastScrollPosition) > 10) handleCount();
    };

    const  handleProgramming = () => {
        history.push('/programming');
    }
    
    return (
        <>
        <div className='screen'>
            <h1>Hello from Acting</h1>
            <button onClick={handleProgramming}>Check out the programming page!</button>
        </div>
          <aside onScroll={handleScroll} >
            <img className='photo' src={(`${photos[prev].devUrl}`)} alt={`${photos[prev].alt}`} />
            <img className='photo' id='focus' src={`${photos[count].devUrl}`} alt={`${photos[count].alt}`} />
            <img className='photo' src={`${photos[next].devUrl}`} alt={`${photos[next].alt}`} />
          </aside>
        </>


    );
};

export default Acting;