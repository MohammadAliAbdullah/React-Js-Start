import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FindDOMNode extends Component {
    findDom() {
        var component = document.getElementById("myID3");
        var component4 = document.getElementById("myID4");
        var component5 = document.getElementById("myID5");
        var component6 = document.getElementById("myID6");
        //    alert(component);
        //    logo192.png
        ReactDOM.findDOMNode(component).style.color = 'green';
        ReactDOM.findDOMNode(component4).style.background = 'red';
        ReactDOM.findDOMNode(component5).value = 'mohammad ali abdullah';
        // ReactDOM.findDOMNode(component5).style.border = 'blue';
        // ReactDOM.findDOMNode(component).style.color='green';
        ReactDOM.findDOMNode(component6).src = process.env.PUBLIC_URL + "/logo192.png";
    }

    render() {
        return (
            <div className="container border">
                <h3>25. findDOMNode()</h3>
                <div className="row">
                    <div className="col-4">
                        <h4>Structure</h4>
                        <h6>ReactDOM.findDOMNode(component)</h6>
                    </div>
                    <div className="col-4">
                        <button onClick={this.findDom}>Change findDOMNode</button>
                        <img className="img" id="myID6" src={process.env.PUBLIC_URL + "/photo/statearrow.JPG"}></img>
                    </div>
                    <div className="col-4">
                        <h4>Test</h4>
                       
                        <h3 id="myID3">here </h3>
                        <h3 id="myID4">Abdullah </h3>
                        <input type="text" value="" id="myID5" readOnly></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default FindDOMNode;
