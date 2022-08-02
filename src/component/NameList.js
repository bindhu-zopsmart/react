import React from 'react'

function NameList() {
    const Names=['Brunce','Clark','diana']
  return (
    <div>{
    Names.map(name => <h2>{name}</h2>)
}
    </div>
  )
}

export default NameList