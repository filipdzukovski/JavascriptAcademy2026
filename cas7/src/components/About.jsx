import React from 'react';
import {Outlet} from 'react-router-dom';


export const About = () => {
    return (
        <>
            <h1>About</h1>
            <Outlet/>
        </>
    )
}