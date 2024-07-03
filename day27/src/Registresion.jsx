import { set } from 'firebase/database'
import React from 'react'
import { useState } from 'react'
import { ref } from 'firebase/database'
import { database } from './Firebase'

function Registresion() {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newuserRef = ref(database, `users/${name}`);
        set( newuserRef, {name , password})
    }

  return (
    <div className='main'>
    
     <form onSubmit={handleSubmit}>
        <h1>Registresion Form</h1>


     <input className='input' placeholder='Enter User Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/> 
     
     <input className='input' placeholder='Enter your Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

     <button className='btn1' type='submit'>Submit</button>
     </form>
  
  </div>
  )
}

export default Registresion
