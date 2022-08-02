import React, { Component } from 'react'

 class Eventbind extends Component {
  constructor(props){
   super(props)

    this.state={
      message:'hello'
    }
    
  }
  ClickHandler(){
    this.setState({
      message:'goodbye'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        <button onClick={this.ClickHandler.bind(this)}>press</button>
        
        </div>
    )
  }
}

export default Eventbind