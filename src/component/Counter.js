import React , { Component } from "react";
//setState
class Counter extends Component{

    constructor(props){
        super(props)
        this.state={
            count:0
        }

    }
    increment(){
        this.setState({
            count:this.increment.count + 1
        })
    }
    render(){
        return (
        <div>
           <div>Count-{this.state.count}</div>
           <button onClick={()=>this.increment()}>Click</button>
        </div>
        ) 
    }

}
export default Counter
