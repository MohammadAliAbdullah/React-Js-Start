import React, { Component } from 'react';

class Refresh extends Component {
constructor(){
    super()
    this.refrsh=this.refrsh.bind(this);
}

    refrsh = () => {
        // alert();
        this.forceUpdate();
    }
    render() {

        return (
            <div className="container border">
                <h3>Force Update</h3>
                <div>
                    <h5>{Math.random()}</h5>
                    <button onClick={this.refrsh}>Refresh Button</button>
                </div>
            </div>
        )
    }
}
export default Refresh;