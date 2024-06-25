import React, { useEffect, useState } from 'react'
import { auth, provider } from './Config'
import Home from './Home'
import { signInWithPopup } from 'firebase/auth'

function Singin() {

    const [value, setValue] = useState("")

    const handleClick=()=>{
        signInWithPopup(auth , provider)
        .then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        }).cathh((error)=>{
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
      {value ? <Home/>: <button onClick={handleClick}>SingIN With</button>}
    </div>
  )
}

export default Singin
