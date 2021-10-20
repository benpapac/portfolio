import React from 'react';
import './Programming.css';
import { useHistory } from 'react-router';
const Programming = () => {
    const history = useHistory();

    const  handleActing = () => {
        history.push('/acting');
        }

    return (
        <div className='screen'>
            <h1>Hello from Programming</h1>
            <button onClick={handleActing}>Check out the acting page!</button>
        </div>
    );
};

export default Programming;