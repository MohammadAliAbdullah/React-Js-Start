import React, { Component } from 'react';

class InputSingle extends Component {

    constructor() {
        super();
        this.state = {
            username: ""
        }
    }

    onChangeHandler = (event) => {
        // value ---
        // var val = event.target.value;
        // console.log(nam);
        // this.setState({ username: val });
        // name ---
        var name = event.target.name;
        var val = event.target.value;
        this.setState({ [name]: val });


    }

    // onKeyup={onChangeHandler}
    render() {
        return (
            <div className="container border">
                <h3>26. Single Input Form</h3>
                <form>
                    <label>Name</label> <h3>{this.state.username}</h3> <br></br>
                    <input onChange={this.onChangeHandler} type="text" name="username" id="name"></input>
                    <input type="Submit" name="submit" id="submit"></input>
                </form>
            </div>
        );
    }
}

export default InputSingle;
