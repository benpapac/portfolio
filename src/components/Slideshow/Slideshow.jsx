import { useState, useEffect} from 'react';
import './Slideshow-Phone.css';
import "./Slideshow.css";

const Slideshow = ({slideshow}) => {
    const [count, setCount] = useState(0);

    useEffect( () => {
        setTimeout(  (count) => {
                setCount((count) => count === slideshow.length-1 ? 0 : count + 1);
            }, 4000)
        }, [count]);

    const copy = (slideshow) => {
        return copy === slideshow.length -1 ? slideshow[0].alt : slideshow[count].alt;
    }

return (
    <>
    <section className="slideshow-box" >
     <div className='slideshow' >
            <div className="slider" 
                style={{transform: `translate3d(0, ${-count*100}%, 0)`}}
            >
                {slideshow.map(
                    (slide, index) =>  <div className='slide'>{slide}</div>
                    )}
            </div>
        </div>
        </section>
    </>
)
};

export default Slideshow;