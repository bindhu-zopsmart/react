import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    
//using ternnary operator
    return(
        this.state.isLoggedIn ?
        <div>welcomevishwas</div>:
        <div>welcome guest</div>
    )

    /*2.using Element variable
    let Messages
    if(this.state.isLoggedIn){
        Messages=<div>Welcome Vishwas</div>

  }else{
    Messages=<div>Welcome Guest</div>
  }
  return <div>{Messages}</div>*/
}


    //1. using if else statement
    /*if(this.state.isLoggedIn){
        return(
            <div>welcome viswas</div>
        )
    }else{
        return(
            <div>Welcome Guest</div>
        )
    }
    
  } */
}

export default UserGreeting