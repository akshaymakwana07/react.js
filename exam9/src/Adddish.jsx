import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Adddish({addnewPost}) {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        addnewPost(title,content)
        navigate('/')
    }
  return (
    <div className='main'>
      <div className='child'>
      <h1>Order Dish</h1>

    <form onSubmit={handleSubmit}>
        <h2 className='t1'>Enter Dish Name : </h2>
        <input className='tx1' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br/><br/><br/>

        <h2 className='t1'>Prize :</h2>
        <input className='tx2' value={content} onChange={(e)=>setContent(e.target.value)}></input> <br/><br/><br/>

        <button className='btn3' type='submit'>ADD DISH</button><br/><br/><br/>
    </form>


      <Link className='btn2' to = "/"> <i class="bi bi-skip-backward-btn-fill"></i> </Link>
      </div>  
    </div>
  )
}

export default Adddish
