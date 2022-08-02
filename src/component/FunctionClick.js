import React from "react";
//Event handler in functional component
//we dont use this in functional component
function FunctionClick(){

    function clickHandler(){
        console.log('button clicked')
    }
    return(
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
    )
}
export default FunctionClick