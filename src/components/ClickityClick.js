// Code ClickityClick Component Here


import React, { Component } from 'react'

export class ClickityClick extends Component {

    constructor(props) {
        super()

        this.state = {
            hasBeenClicked: props.hasBeenClicked,
            currentTheme: props.currentTheme,
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
              },
        }
    }


    
    handleClick = (e) => {
        // // console.log(e, this.state)
        // console.log(this.state)
        // // this.setState({hasBeenClicked: false})
        // this.setState({hasBeenClicked: !this.state.hasBeenClicked})
        // // console.log(e, this.state)
        // console.log(this.state)
        // this.setState({addressInfo: {
        //     street: '104 houston st',
        //     number: null,
        //     city: null,
        //     country: null
        //   },})
        handleClick = () => {
            this.setState({
              hasBeenClicked: true
            })
            console.log(this.state.hasBeenClicked); // prints false
          }
           
    }


        render () {
            return (

                <button onClick={this.handleClick}> Click Me </button>
            )

        }
}