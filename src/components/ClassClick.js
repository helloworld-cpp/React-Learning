import React, { Component } from 'react';

class ClassClick extends Component {
    clickButton() {
        console.log("Hello i am button from class")
    }
  render() {
    return (
        <div>
            <button onClick={this.clickButton}>Class CLick Button</button>
        </div>
    )
  }
}

export default ClassClick;
