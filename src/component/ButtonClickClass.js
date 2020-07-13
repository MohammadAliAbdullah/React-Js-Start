import React, { Component } from 'react'

class ButtonClickClass extends Component {



    clickCla(a,b) {
        alert(a+'\n'+b);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickCla.bind(this, 'I am from Button Class with parameter','my age is 45')} className="button">Click Me Class</button>
            </div>
        );
    }
}
export default ButtonClickClass;
