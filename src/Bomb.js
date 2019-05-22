// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  countdown = () => {
    const newCount = this.state.secondsLeft - 1
    this.setState({
      secondsLeft: newCount
    })
  }


render() {
  { if( this.state.secondsLeft === 0 ) return ( 'Boom!')}
  return (
    
    <div onClick={this.countdown}>{this.state.secondsLeft} seconds left before I go boom!</div>
  )
  }



}
