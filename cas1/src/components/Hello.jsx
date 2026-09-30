import React from 'react';
import {Goodbye} from './Goodbye';

export class Hello extends React.Component {

    render() {
        return (
            <div>
                <h2 style={{backgroundColor:'red',color:'white'}}>This is a class component</h2>
                <Goodbye/>
            </div>
        )
    }

}
