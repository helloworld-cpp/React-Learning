import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.refComponent = React.createRef()
    }

    focusInput () {
        this.refComponent.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.refComponent}> </input>
            </div>
        )
    }
}

export default Input;
