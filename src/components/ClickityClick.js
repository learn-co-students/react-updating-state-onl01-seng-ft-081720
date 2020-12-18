// Code ClickityClick Component Here
import React from 'react';
 
export default class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState({
      hasBeenClicked: true
    }), () => console.log(this.state.hasBeenClicked)
    // turn into a arrow function to see the updated state in the console 
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 

 
