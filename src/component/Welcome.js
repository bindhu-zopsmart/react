import React , { Component } from "react";
//Class component
class Welcome extends Component{
    render(){
        return(
            //in class component we use this to specify the property
            <h1>welcome {this.props.name} a.k.a {this.props.heroname}</h1>

        )
        
    }

}
export default Welcome



