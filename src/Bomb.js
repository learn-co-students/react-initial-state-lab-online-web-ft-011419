import React, {Component} from 'react';

class Bomb extends Component {

    constructor(prop) {
        super(prop)
        this.state = {
            secondsLeft: prop.initialCount
        }
    }

    render() {
        if (this.state.secondsLeft != 0) {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
            return <div>Boom!</div>
            }
    }
}

export default Bomb