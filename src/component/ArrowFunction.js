import React from 'react';

// behin arrow function
const Arrow = (x) => {
    alert(x);
}
// behin function

function doThis(a) {
    alert(a);
}

const ArrowFunction = () => {

    // inter function
    function ArrowInter(a) {
        alert(a);
    }
    
    return (
        <div>
            <button onClick={doThis.bind(this, "I am from Arrow Function")} className="btn btn-success">Click Me Arrow Function</button>
            <br></br>
            <br></br>
            <button onClick={Arrow.bind(this, "I am from Arrow Function 2")} className="btn btn-danger">Click Me Arrow</button>
            <br></br>
            <br></br>
            <button onClick={ArrowInter.bind(this, "I am from Arrow Inter Function")} className="btn btn-dark">Click Me Arrow Function</button>

        </div>
    );
}
export default ArrowFunction;