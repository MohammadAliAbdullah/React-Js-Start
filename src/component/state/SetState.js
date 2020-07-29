import React, { Component } from 'react'

class SetState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Mohammad Ali Abdullah",
            company: "Habro"
        }
    }
    changeSetState(a) {
        // alert(a);
        this.setState({
            company: a
        })
    }

    render() {
        return (
            <div>
                <h3>18. setState Example</h3>
                <div className="container border">
                    <div className="row">
                        <div className="col-4">
                            <h5>State</h5>
                            {this.state.name}
                        </div>
                        <div className="col-4">
                            <h5>Button</h5>
                            <button onClick={this.changeSetState.bind(this, "Habro System Limited")} className="btn btn-dark">Click Me setState</button>
                            <br></br><br></br>
                        </div>
                        <div className="col-4">
                            <h5>setState</h5>
                            <h6> {this.state.company}</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SetState;
