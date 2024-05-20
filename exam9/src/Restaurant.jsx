
import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Restaurant({editPost,posts}) {

  const{id} = useParams()

  let ans = posts.find(post=> post.id === parseInt(id))

  const [title,setTitle] = useState (ans.title)
  const [content,setContent] =useState (ans.content)

  const navigate = useNavigate()
  

  function handlesubmit(e){
    e.preventDefault()
    editPost(ans.id, title , content)
    navigate('/')
  }
  return (
    <div>
      <h1>Edit Dish</h1>

      <form onSubmit={handlesubmit}>

      <h2 className='t1'>Enter Dish Name : </h2>
        <input className='tx1' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/><br/><br/>

        <h2 className='t1'>Prize :</h2>
        <input className='tx2' value={content} onChange={(e)=>setContent(e.target.value)}></input> <br/><br/><br/>

        <button className='btn3' type='submit'>ADD DISH</button><br/><br/><br/>

      </form><br/><br/><br/>

      <Link to ="/">BACK TO HOME</Link>
    </div>
  )
}

export default Restaurant
