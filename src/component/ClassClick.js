import React, { Component } from 'react'
//Event handler in Class component
//we use this keyword im Class component
export class ClassClick extends Component {
    clickhandler(){
        console.log("click me")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>clickme</button>
      </div>
    )
  }
}

export default ClassClick