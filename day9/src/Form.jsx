import React, { useState } from 'react'

function Form() {
    const[FormData,setformdata] = 
    useState ({
        username :"",
        email : "",
        password : ""
    })

    function handleinput(e){
        const {name,value} = e.target

        setformdata ({
            ...FormData,
            [name]:value
        })

       
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(FormData)
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
    <label>Enter UserName</label>
    <input placeholder='Enter username' type='text' name='username' value={FormData.username} onChange={handleinput}/>
    <br/><br/>
    <label>Enter email</label>
    <input placeholder='enatr email' type='text' name='email' value={FormData.email} onChange={handleinput}/>
    <br/><br/>
    <label>Enter Passwoed</label>
    <input placeholder='enatr password' type='text' name='password' value={FormData.password} onChange={handleinput}/>
    <br/><br/>

    <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
