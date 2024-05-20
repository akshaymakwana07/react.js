import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ posts ,deletePost }) { 
  function handleDelete(id){
    deletePost(id)
  }

  const [searchitem, setsearchItem] = useState('')
  const filteredpost = posts.filter((el)=>(
    el.title.toLowerCase().includes(searchitem.toLowerCase())
  ))
  console.log(posts)
  return (
    <div>
      <h1>Welcome To our Page</h1>
      <input value={searchitem} onChange={(e)=>setsearchItem(e.target.value)}/>
      {
        filteredpost.map((el) => (
          <div key={el.id}> 
            <h2>{el.title}</h2>
            <p>{el.content}</p>

            <img src={URL.createObjectURL(el.image)} alt='post' style={{width : '200px', height : '200px'}}/> <br/><br/>
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

