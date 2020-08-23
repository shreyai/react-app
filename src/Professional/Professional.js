import React from 'react';

const professional = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am a {props.profession} by profession.</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
}

export default professional;
