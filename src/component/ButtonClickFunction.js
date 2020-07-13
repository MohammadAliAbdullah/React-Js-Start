import React from 'react'
import './../App.css';
function ButtonClickFunction() {

function clickFun(a,b) {
    alert(a +'\n'+b);
}

    return(
        <div>
            <button onClick={clickFun.bind(this, "I am From Button Click Function with parameter","my age 28")} className="button">Click Me Function</button>
        </div>
    );
}
export default ButtonClickFunction;