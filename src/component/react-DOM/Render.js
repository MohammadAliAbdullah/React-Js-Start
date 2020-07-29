import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Render extends Component {


    domFun = () => {
        var container = document.getElementById("myID");
        var element = <h1>Mohammad Ali Abdullah</h1>;
        var callback = function () {
            alert("I am Callback function");
        }
        ReactDOM.render(element, container, callback);
    }
    render() {
        return (
            <div className="container border">
                <h3>24. render()</h3>
                <div className="row">
                    <div className="col-4">
                        <h4>Structure</h4>
                        <h6>ReactDOM.render(element, container, callback)</h6>
                    </div>
                    <div className="col-4">
                        <button onClick={this.domFun}>Change Contain</button>
                    </div>
                    <div className="col-4">
                        <h4>Test</h4>
                        <h6 id="myID">I am from Bangladesh</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Render;
