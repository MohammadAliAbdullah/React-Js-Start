import React, { Component } from 'react';
import theimage from './images/state.JPG';

class StateArrowProperty extends Component {

    constructor() {
        super()

        var properties = {
            name: "Mohammad Ali Abdullah",
            age: ["28", "30", "35", "40"],
            hight: "5 feet 4 inch",
            weight: {
                class1: {
                    bangla:"85",
                    math:["95","99","100"],
                    english:"75",
                },
                class2: "30",
                class3: "35",
                class4: "40",
                class5: "45",
            }
        }
        this.state = properties;
    }
    render() {
        return (
            <div className="container border">
                <h3>State Arrow and Child Property</h3>
                <div className="row">
                    <div className="col-4">
                        <h5>Single Property</h5>
                        <div className="text-info">
                            Name: {this.state.name}
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Multiple Property</h5>
                        <div className="text-info">
                            Name: {this.state.name} <br></br>
                           age (arrow) : {this.state.age[1]} <br></br>
                           hight: {this.state.hight} <br></br>
                           weight (Child Property): {this.state.weight.class1.math[2]} <br></br>

                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Photo</h5>

                        {/* <img src={theimage} className="img"></img> */}
                        {/* it work index.html */}
                        {/* <img src="/%PUBLIC_URL%/logo192.png" className="img"/> */}
                        {/* <img src={process.env.PUBLIC_URL + "/logo192.png"}></img> */}
                        <img src={process.env.PUBLIC_URL + "/photo/statearrow.JPG"} className="img"></img>

                        {/* wrong method ..... */}
                        {/* <img src={'./images/state.JPG'} className="img"></img> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default StateArrowProperty;