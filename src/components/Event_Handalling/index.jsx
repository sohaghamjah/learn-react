import React, { Component } from 'react'

export default class Event_Handalling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue: '',
      }
    }
    

    handleEvent = (e) => {
        this.setState({
            changedValue: e.target.value
        });
    }

    render() {
        const {changedValue} = this.state;
        return (
        <div>
            <input type="text" placeholder='Write Here' onChange={this.handleEvent}/>
            <p>{changedValue}</p>
        </div>
        )
    }
}
