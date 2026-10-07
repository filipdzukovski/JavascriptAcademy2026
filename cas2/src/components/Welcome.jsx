import React from 'react';

export const Welcome = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Welcome {props.name} {props.lastName} </h3>
            <p>Age: {props.age} </p>
        </div>
    )
}