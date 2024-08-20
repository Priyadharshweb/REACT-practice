import React from 'react'

const ListChild = (props) => {
  return (
    <div>
        <h1>ListItems</h1>
        <h1>ordered List</h1>
        <ol>
            {
                props.data1.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ol>
        <h1>Unordered List</h1>
        <ul>
            {
                props.data2.map((a,b)=>(
                    <li key={b}>{a}</li>
                ))
            }
        </ul>


    </div>
  )
}

export default ListChild