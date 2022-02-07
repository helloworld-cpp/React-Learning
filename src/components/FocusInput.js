import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.compRef = React.createRef()
    }

    trigger = () => {
        this.compRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <Input ref={this.compRef}></Input>
                <button onClick={this.trigger}> Focus Input </button>

            </div>
        )
    }
}

export default FocusInput;
