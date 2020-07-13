import React from 'react';

function Hr(Props) {
    return (
        <div>
           
            <hr></hr>
            <h1>{Props.name}</h1>
            <h4>{Props.command}</h4>
        </div>
    );
}
export default Hr;