import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : "",
         topic: "python"
      }
      this.handleUsernameChange = this.handleUsernameChange.bind(this)
      this.changeTopic = this.changeTopic.bind(this)
    }


    handleUsernameChange (event) {
        this.setState({
            username : event.target.value
        })
    }

    changeTopic (event) {
        this.setState({
            topic : event.target.value
        })
    }
    
  render() {
    return (
        <form>
            <div>
            <lable> User Name </lable>
            <input
                type = "text"
                value = {this.state.username}
                onChange = {this.handleUsernameChange}
            ></input>
            </div>

            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.changeTopic}>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                </select>
            </div>
            

        </form>
    )
  }
}

export default Form;
