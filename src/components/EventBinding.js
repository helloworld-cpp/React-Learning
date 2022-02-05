import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello User"
      }

      this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState({
            message : "Bbye User" 
        })
    }
    


  render() {
    return (
        <div>
            <div>{this.state.message} </div>
            <button onClick={this.changeState}> Click Me </button>
        </div>
    )
  }
}

export default EventBinding;
