import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { auth, provider } from './Config'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'



function SinIn() {
    const [value, setValue] = useState("")

    const handleClick = () =>{
        signInWithPopup(auth,provider)
        .then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        let userEmail = localStorage.getItem("email")
        if(userEmail){
            setValue(userEmail)
        }
    },[])


  return (
    <div>
      {value ? <Home/> : <button onClick={handleClick}>SINGIN WITH GOOGLE</button>}
    </div>
  )
}

export default SinIn
