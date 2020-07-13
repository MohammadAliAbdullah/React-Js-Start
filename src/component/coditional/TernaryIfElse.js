import React, { Component } from 'react';

class TernaryIfElse extends Component {

    constructor() {
        super()
        this.state = {
            login: true
        }
    }
    logIn(a) {
        // alert(a);
        this.setState({ login: a })
    }

    render() {
        return (
            <div className="container border">
                <h3>20. If And Else with Ternary Operatior</h3>
                {(this.state.login == true) ? (
                    <div className="container border">
                        <div className="row">
                            <div className="col-4">
                                The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
                        <h5>Role:--(Condition) ? (Statement1) : (Statement2);</h5>
                                <p>
                                    Condition: It is the expression to be evaluated which returns a boolean value. <br></br>
                            Statement 1: it is the statement to be executed if the condition results in a true state. <br></br>
                            Statement 2: It is the statement to be executed if the condition results in a false state.
                        </p>
                                <p>$marks=40; <br></br>
                      print ($marks>=40) ? "pass" : "Fail"; </p>
                            </div>
                            <div>
                                <div className="col-06">
                                    <br></br>
                                    <br></br>
                                    <h3>Login Here !!</h3>

                                </div>
                                <div className="col-2">
                                    <div>
                                        <form onSubmit="">
                                            <label>User</label>
                                            <input type="text" name="username" placeholder="User name" className="form-control-sm" required />
                                            <label>Password</label>
                                            <input type="password" name="username" placeholder="User Password" className="form-control-sm" required />
                                            <br></br>
                                            <br></br>
                                            <button onClick={this.logIn.bind(this, false)} className="btn btn-primary">Login Please!!</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="container border">
                            <div className="row">
                                <div className="col-4">
                                    The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
                        <h5>Role:--(Condition) ? (Statement1) : (Statement2);</h5>
                                    <p>
                                        Condition: It is the expression to be evaluated which returns a boolean value. <br></br>
                            Statement 1: it is the statement to be executed if the condition results in a true state. <br></br>
                            Statement 2: It is the statement to be executed if the condition results in a false state.
                        </p>
                                    <p>$marks=40; <br></br>
                      print ($marks>=40) ? "pass" : "Fail"; </p>
                                </div>
                                <div>   <div className="col-06">
                                    <br></br>
                                    <br></br>
                                    <h3>I am User!!</h3>
                                    <br></br>
                                    <br></br>
                                </div>
                                    <div className="col-2">
                                        <div>

                                            <button onClick={this.logIn.bind(this, true)} className="btn btn-primary">Logout</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}
export default TernaryIfElse;