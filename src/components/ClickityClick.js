// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor() {
      super();
   
      // Define the initial state:
      this.state = {
        hasBeenClicked: false,
        toggled: false
      };
    }
   
    handleClick = () => {
      // Update our state here...
      this.setState(prevState => {
            return {
                hasBeenClicked: true,
                toggled: !prevState.toggled
            }
          })
    };
   
    render() {
      return (
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
          <p>Yet the toggle is now {this.state.toggled ? 'ON' : 'OFF'}!</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
  }
   
  export default ClickityClick;