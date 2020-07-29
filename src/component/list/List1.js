import React, { Component } from 'react';

class List1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "Bangladesh"
        }
    }


    childList = (data) => {
        return <li>{data}</li>;
    }

    render() {

        const brother = ["abdullah", "habib", "khalil", "jalil", "imam"];
        // const brotherlist = brother.map((mybrother) => {
        //     return <li>{mybrother}</li>
        // });

        const brotherlist = brother.map(this.childList);


        return (
            <div>
                <h3>list {this.state.name}</h3>
                <ul>{brotherlist}</ul>
            </div>
        );
    }
}

export default List1;
