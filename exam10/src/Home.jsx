import React from 'react'
import { Link } from 'react-router-dom';

function Home({prodect}) {

  return (
    <div>
      <h1>Welcome to our prodect</h1>
      {
      prodect.map((el)=>(
        <div key={el.id}>
          
            
            <h2>{el.title}</h2>
            <h2>{el.price}</h2>
            <h2>{el.rating}</h2>
            <h2>{el.description}</h2>
       
          
          </div>
        ))
      }
      <Link to="/add">ADD PRODECT</Link>
      
    </div>
  )
}

export default Home
