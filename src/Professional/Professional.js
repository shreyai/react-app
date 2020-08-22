import React from 'react';

const professional = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am a {props.profession} by profession. <button onClick={props.click}>Change Name</button></p>
        </div>
    )
}

export default professional;
