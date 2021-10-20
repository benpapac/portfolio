import { waitFor } from '@testing-library/react';
import { useState, useRef, useLayoutEffect } from 'react';


const isBrowser = typeof window !== 'undefined';



const getScrollPosition = ({element, useWindow }) => {
    if(!isBrowser) return { x: 0, y: 0 }

    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect()

    return useWindow ? 
    { x: window.scrollX, y: window.scrollY}
    :
    {x: position.left, y: position.top}
}

export const useScrollPosition = (effect, deps, element, useWindow) => {
    const position = useRef(getScrollPosition({useWindow}));
    const [hideOnScroll, setHideOnScroll] = useState(true);

    let throttleTimeout = null;

    const callBack = () => {
        const currPos = getScrollPosition({element, useWindow })
        effect({ prevPos: position.current, currPos });
        position.current = currPos;
        throttleTimeout = null;
    }

    useLayoutEffect( () => {
        const handleScroll = () => {
            if(waitFor) {
                if (!throttleTimeout) {
                    throttleTimeout = setTimeout(callBack, waitFor);
                }
            } else {
                callBack();
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, deps);

    useScrollPosition(({prevPos, currPos}) => {
        const isShow = currPos.y > prevPos.y;
        if(isShow !== hideOnScroll) setHideOnScroll(isShow)
    }, [hideOnScroll])
}