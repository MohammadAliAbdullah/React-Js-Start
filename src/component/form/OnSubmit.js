import React, { Component } from 'react';

class OnSubmit extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

    }
    onChangeHadler = (event) => {
        var nam = event.target.name;
        var val = event.target.value;
        this.setState({
             [nam]: val
         });
    }
    onSubmithandler = () => {
        alert(this.state.username+'\n'+this.state.password);
    }

    render() {
        return (
            <div className="container">
                <h3>onsubmit</h3>
                <p>{this.state.username}</p>
                <p>{this.state.password}</p>

                <p>form here</p>
                <form onSubmit={this.onSubmithandler}>
                    <input onChange={this.onChangeHadler} type="text" name="username" id="username"></input> <br></br>
                    <input onChange={this.onChangeHadler} type="password" name="password" id="password"></input><br></br>
                    <input type="submit" name="submit" id="submit"></input>
                </form>
            </div>
        );
    }
}

export default OnSubmit;
