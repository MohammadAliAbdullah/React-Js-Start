import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hydrate extends Component {
    domFun = () => {
        var container = document.getElementById("myID2");
        var element = <h1>Mohammad Ali Abdullah</h1>;
        var callback = function () {
            alert("I am Callback function");
        }
        ReactDOM.hydrate(element, container, callback);
    }
    render() {
        return (
            <div className="container border">
                <h3>24. hydrate()</h3>
                <div className="row">
                    <div className="col-4">
                        <h4>Structure</h4>
                        <h6>ReactDOM.hydrate(element, container, callback)</h6>
                    </div>
                    <div className="col-4">
                        <button onClick={this.domFun}>Change Contain</button>
                    </div>
                    <div className="col-4">
                        <h4>Test</h4>
                        <h6 id="myID2">I am from Bangladesh</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hydrate;
