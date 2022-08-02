import React from "react";
//function component 

//Props works in function component and class component
//props can be directly accessed by using props(in functional component )in Arrow functionn
const Greet =(props) =>{

    return(
    <div>
        <h1>hello {props.name} a.k.a {props.heroname}</h1>
        {props.children}
    </div>
    )
}
export default Greet