import React, { Component } from 'react';
import FRinput from './FRinput';

class FRParentInput extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef();
    }

    handle = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRinput ref={this.inputRef}></FRinput>
                <button onClick={this.handle}>ON CLick </button>
            </div>

        )
    }
}

export default FRParentInput;
