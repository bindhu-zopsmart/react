import React , { Component } from "react";

class Messages extends Component{
    //states

    //states works only in class component
    constructor(){
        super()
        this.state={
            Message:'Welcome Visitor'
        }

    }
    changeMessage(){
        this.setState({
            Message: 'Thanks for subscribing'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>

        )
        
    }
}

export default Messages