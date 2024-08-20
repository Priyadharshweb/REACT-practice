import React from 'react'

const List = () => {
    const arr=["a","b","c","d","e","f","g"]
  return (
    <div>
        <h1>Ordered List</h1>
        <ol type="I">
            <li>Student 1</li>
            <li>Student 2</li>
        </ol>
        
            <h1>Unordered List</h1>
            <ul>
        <li>Student 1</li>
        <li>Student 2</li>
        </ul>
        <h1>Key values using MAP function</h1>
        <ol>
            {
                arr.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ol>
    </div>
  )
}

export default List