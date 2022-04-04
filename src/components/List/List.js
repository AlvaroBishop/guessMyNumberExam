import React from 'react'
import './List.css'
const List = ({list}) => {
    console.log(list)
  return (
    <div className='list'>
        <h3>Numeros intentados: </h3>
        <div>
            {list.map((n, key) => <p key={key}>{n}, </p>)}
        </div>
    </div>
  )
}

export default List;
