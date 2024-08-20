import React from 'react'
import ListChild from './ListChild'

const ListParent = () => {
    const arr=["A","B","C","D"]
    const arr2=["hello","world"]
  return (
    <div>
        <h2>Array Items</h2>
        <ListChild data1={arr} data2={arr2}/>
    </div>
  )
}

export default ListParent