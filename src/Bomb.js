// your Bomb code here!

import React from 'react';
class Bomb extends React.Component{ // created a class for Bomb

    // the constructor takes in the prop values so they may be used 
    // to intiialize the state of the class
    constructor(props) {
        super() 
        // set the state secondsLeft equal to the props and the initialCount object
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // render the message that will be used in our 'root' div
    render() {

        // set our response equal to a message object => 'const message'
        // if the secondsLeft integer is equal to zero response is 'Boom!

        const message = this.state.secondsLeft  === 0 ? 'Boom!' : 
        
        // else the rendered response is vvvvvvvvv
        `${this.state.secondsLeft} seconds left before I go boom!`;
        return(
            <div>{message}</div>
        )
    }
}

export default Bomb;