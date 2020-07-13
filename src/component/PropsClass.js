import React, { Component } from 'react';

class PropsClass extends Component {

    render() {
        return (
            <div>
                <h3>Props Name: {this.props.name} Age: {this.props.age} Distruct: {this.props.distruct} From Class</h3>
            </div>
        );
    }
}
export default PropsClass;