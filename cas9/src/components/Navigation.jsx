import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => {

    return(
        <ul id='nav'>
            <li><Link to="/">Back to Home</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
        </ul>
    )
}