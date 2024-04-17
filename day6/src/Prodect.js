import React from 'react'

function Prodect(props) {
  return (

    <div id='pd1'>
      <ul>
        {
            props.data && props.data.map((p)=>
            <li key={p.id}>
                <div id='prode1'>
                    <h2>{p.id}</h2>
                    <h1>{p.title}</h1>
                    <h3>{p.price}</h3>
                    <p>{p.category}</p>
                    <img src={p.image}></img>
                </div>
            </li>
        )
        }
      </ul>
    </div>
  )
}

export default Prodect
