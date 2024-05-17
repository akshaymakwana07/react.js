import React from 'react';
import { Link } from 'react-router-dom';


function Home({ posts ,deletePost }) { 
  function handleDelete(id){
    deletePost(id)
  }
  return (
    <div>
      <h1>Welcome To our Page</h1>
      {
        posts.map((el) => (
          <div key={el.id}> 
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button className='btn1' onClick={()=>handleDelete(el.id)}><i class="bi bi-archive-fill"></i></button>
            {/* <Link>
            <button className='btn5'></button>
            </Link> */}
            <Link className='btn5' to = {`/edit/${el.id}`}> <i class="bi bi-pencil-square"></i></Link>
          </div> 
        ))
      }<br/><br/>
      <Link className='btn4' to="/add">ADD POST</Link>
    </div>
  );
}

export default Home;

