import React, { Component } from 'react';

class InputSelect extends Component {
    constructor() {
        super();
        this.state = {
            select: "", 
            abdullah: "Abdullah",
            khalil: "Khalil",
            jalil: "Jalil"
        }
    }

    selectHandler = (event) => {
        var value = event.target.value;
        this.setState({ select: value });
    }

    render() {
        return (
            <div>
                <h3>Select</h3>
                <h3>{this.state.select}</h3>
                <select name="select" onChange={this.selectHandler}>
                    <option value="">-- select--</option>
                    <option value={this.state.abdullah} selected>{this.state.abdullah}</option>
                    <option value={this.state.khalil}>{this.state.khalil}</option>
                    <option value={this.state.jalil}>{this.state.jalil}</option>
                </select>
            </div>
        );
    }
}

export default InputSelect;
