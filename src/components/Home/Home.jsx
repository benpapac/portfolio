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
        <aside>
            <div className='scroll-box'>
                {/* {blocks.map(block => {
                    make(block);
                    move(block); */}
                })}
            </div>
        </aside>
    );
};

export default Home;