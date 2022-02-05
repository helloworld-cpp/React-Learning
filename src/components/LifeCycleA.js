import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Farhan"
        }
        console.log("LifeCycleA constructor")
        this.changeState = this.changeState.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate")
    }

    changeState() {
        this.setState({
            name: "Sheikh"
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                LifeCycleA
                <div>
                    <button onClick={this.changeState}>Change State</button>
                </div>
                <div>
                    <LifeCycleB></LifeCycleB>
                </div>
            </div>
        )
    }
}

export default LifeCycleA;
