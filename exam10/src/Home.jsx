import React from 'react'
import { Link } from 'react-router-dom';

function Home({prodect , deleteProdect}) {
function handleDelete(id){
  deleteProdect(id)
}
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
            <button className='btn1' onClick={()=>handleDelete(el.id)}>Dlete</button>
            <Link className='btn5' to = {`/edit/${el.id}`}> edit</Link>
       
          
          </div>
        ))
      }
      <Link to="/add">ADD PRODECT</Link>
      
    </div>
  )
}

export default Home
