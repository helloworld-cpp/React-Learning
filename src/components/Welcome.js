import React from "react";
import { Component } from "react";

class Welcome extends Component { 

    render() { 
        const {name} = this.props
        return (
            <h1> Hello From the {name} </h1>
        )
    }
}

export default Welcome;