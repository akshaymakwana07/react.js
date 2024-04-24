import React, { useState } from 'react'

function Form() {
    const[FormData,setformdata] = 
    useState ({
        username :"",
        email : "",
        password : ""
    })

    const [errors,setErrors] = useState({})

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

        let errors = validate(FormData)
        setErrors(errors)
        if(Object.keys(errors).length ===0){
          alert("Submitted")
        } else{
          setErrors(errors)
        }
    }

    function validate(value){
      let errors = {}
      let regex =/ ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (!value.username){
        errors.username = "** username is required **"
      }

      if (!value.email){
        errors.email = "** eamil is required **"
      } else if (!regex.test(value.email)){
        errors.email = "** @ is commited **"
      }

      if (!value.password){
        errors.password = "** password is required **"
      } else if(value.password.length < 8){
        errors.password = "** minimum 8 craractur are required"

      }
      return errors
    }

    
  return (
    <div>
      <center>
      <form onSubmit={handleSubmit}>
    <label>Enter UserName</label>
    <input placeholder='Enter username' type='text' name='username' value={FormData.username} onChange={handleinput}/>
    <h1>{errors.username}</h1>
    <br/><br/>
    <label>Enter email</label>
    <input placeholder='enatr email' type='text' name='email' value={FormData.email} onChange={handleinput}/>
    <h1>{errors.email}</h1>
    <br/><br/>
    <label>Enter Passwoed</label>
    <input placeholder='enatr password' type='text' name='password' value={FormData.password} onChange={handleinput}/>
    <h1>{errors.password}</h1>
    <br/><br/>

    <button type='submit'>Submit</button>
      </form>
      </center>
    </div>
  )
}

export default Form
