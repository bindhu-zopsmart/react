import React, { Component } from 'react'

import ChildComponet from './ChildComponet'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'

      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`hello ${this.state.parentName}`  )
    }
  render() {
    return (
      <div>
        <ChildComponet greetHandle={this.greetParent}/>
        </div>
    )
  }
}

export default ParentComponent