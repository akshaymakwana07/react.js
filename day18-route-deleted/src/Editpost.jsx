
import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Editpost(editpost,posts) {

  const{id} = useParams()

  let ans = posts.find(post=> post.id === parseInt(id))

  const [title,setTitle] = useState (ans.title)
  const [content,setContent] =useState (ans.content)

  const navigate = useNavigate()
  

  function handlesubmit(e){
    e.preventDefault()
    editpost(ans.id, title , content)
    navigate('/')
  }
  return (
    <div>
      <h1>Edit Page</h1>

      <form onSubmit={handlesubmit}>

      <h2 className='t1'>Title : </h2>
        <input className='tx1' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/><br/><br/>

        <h2 className='t1'>Content :</h2>
        <input className='tx2' value={content} onChange={(e)=>setContent(e.target.value)}></input> <br/><br/><br/>

        <button className='btn3' type='submit'>ADD POST</button><br/><br/><br/>

      </form><br/><br/><br/>

      <Link to ="/">BACK TO HOME</Link>
    </div>
  )
}

export default Editpost
