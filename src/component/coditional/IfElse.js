import React, { Component } from 'react';

class IfElse extends Component {

    constructor() {
        super()
        this.state = {
            login: false
        }
    }
    logIn(a) {
        // alert(a);
        this.setState({ login: a })
    }
    render() {

        if (this.state.login) {
            return (
                <div className="container border">
                     <h3>19. If And Else</h3>
                    <div className="row">
                        <div className="col-10 border-blue">
                            <br></br>
                            <br></br>
                            <h3> Hi User !! Welcome to Home Page.</h3>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="col-2">
                            <div>
                                <button onClick={this.logIn.bind(this, false)} className="btn btn-dark">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container border">
                    <h3>19. If And Else</h3>
                    <div className="row">
                        <div className="col-10">
                            <br></br>
                            <br></br>
                            <h3>Login Here !!</h3>
                            <br></br>
                            <br></br>
                        </div>
                        <div className="col-2">
                            <div>
                                <button onClick={this.logIn.bind(this, true)} className="btn btn-info">Login Please!!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default IfElse;