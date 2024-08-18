import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>this is Child!!!</h1>
        <input type="text"></input>
        <h1>{props.document}</h1>
    </div>
  )
}

export default Child