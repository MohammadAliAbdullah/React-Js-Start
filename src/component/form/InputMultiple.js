import React, { Component } from 'react';

class InputMultiple extends Component {

    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            username: "",
            email: "",

        }

    }

    onChangeHadler = (event) => {
        var nam = event.target.name;
        var val = event.target.value;
        this.setState({
            [nam]: val
        });
        // /^([a-zA-Z' ]+)$/
        if (nam == "fname") {

            if ((/^([a-zA-Z' ]+)$/).test(val)) {
            } else {
                this.setState({ fname: "Name is not valid" });
            }
        }
        if (nam == "lname") {
            if ((/^([a-zA-Z' ]+)$/).test(val)) {
            } else {
                this.setState({lname: "Name is not valid" });
            }

        }

        // https://www.w3resource.com/javascript/form/email-validation.php
        if (nam == "email") {
            // /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {

            } else {
                this.setState({ email: "email is not valid" });
            }
        }
        // pure javascript-------------

        // function ValidateEmail(inputText)
        // {
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if(inputText.value.match(mailformat))
        // {
        // document.form1.text1.focus();
        // return true;
        // }
        // else
        // {
        // alert("You have entered an invalid email address!");
        // document.form1.text1.focus();
        // return false;
        // }
        // }
    }

    onSubmithandler = () => {

        alert(this.state.username + '\n' + this.state.email);
    }

    render() {
        return (
            <div className="container">
                <h3>30. Multiple with onsubmit</h3>
                <p>{this.state.fname}</p>
                <p>{this.state.lname}</p>
                <p>{this.state.username}</p>
                <p>{this.state.email}</p>

                <p>form here</p>
                <form onSubmit={this.onSubmithandler}>
                    <input onChange={this.onChangeHadler} type="text" name="fname" id="fname" placeholder="Input Frist Name"></input> <br></br>
                    <input onChange={this.onChangeHadler} type="text" name="lname" id="lname" placeholder="Input Last Name"></input> <br></br>
                    <input onChange={this.onChangeHadler} type="text" name="username" id="username" placeholder="Input User Name"></input> <br></br>
                    <input onChange={this.onChangeHadler} type="email" name="email" id="email" placeholder="Email"></input><br></br>
                    <input type="submit" name="submit" id="submit" value="Sign Now"></input>
                </form>
            </div>
        );
    }
}

export default InputMultiple;
