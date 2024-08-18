import React from 'react'
import Child from './Child'

const Parent = () => {
    var property="land";
    var property2="car";
  return (
    <div>
        <h1>This is parent!!!</h1>
        <Child document={property} document1={property2}/>
    </div>
  )
}

export default Parent