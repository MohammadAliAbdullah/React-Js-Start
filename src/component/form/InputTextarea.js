import React, { Component } from 'react';

class InputTextarea extends Component {
constructor(){
    super();
    this.state={
        textarea:"ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing following methods and a few more"
    }
}





    render() {
        return (
            <div>
                <h3>Text Area</h3>
                <textarea type="textarea" name="textarea" value={this.state.textarea}/>
            </div>
        );
    }
}

export default InputTextarea;
