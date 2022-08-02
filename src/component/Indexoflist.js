import React from 'react'

function Indexoflist() {
    const Names=['Brunce','Clark','diana','Brunce']
    const Namelist=Names.map((name ,index)=> <h2 key={index}>{index}{name}</h2>)
    return (
      <div>{
      Namelist
        }
      </div>
    )
}

export default Indexoflist