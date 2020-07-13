import React, { Component } from 'react';
import theimage from './images/state.JPG';
class State extends Component {

    constructor() {
        super()
        this.state = {
            name: "Mohammad Ali Abdullah",
            father: "Abdur Rob",
            mother: "Jahanara Begum",
            city: "Maijdee Court",
            distrct: "Noakhali"
        }
    }
    render() {
        return (
            <div className="container border">
                <h3>State</h3>
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
                          Father Name: {this.state.father} <br></br>
                          Mother Name: {this.state.mother} <br></br>
                          City Name:  {this.state.city} <br></br>
                           Distruct Name: {this.state.distrct}
                        </div>
                    </div>
                    <div className="col-4">
                        <h5>Photo</h5>

                        <img src={theimage} className="img"></img>
                        {/* it work index.html */}
                        {/* <img src="/%PUBLIC_URL%/logo192.png" className="img"/> */}
                        {/* <img src={process.env.PUBLIC_URL + "/logo192.png"}></img> */}
                        {/* <img src={process.env.PUBLIC_URL + "/photo/sanjida.jpg"} className="img"></img> */}

                        {/* wrong method ..... */}
                        {/* <img src={'./images/state.JPG'} className="img"></img> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default State;