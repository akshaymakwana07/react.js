import React, { useEffect, useState } from 'react'
import { auth, provider } from './Config'
import Home from './Home'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'

function Singin() {

    const [value, setValue] = useState("")

    const handleClick=()=>{
        signInWithPopup(auth , provider)
        .then((data)=>{
            setValue(data.user)
            console.log(data.user)
            localStorage.setItem("email", data.user.email)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handleSignout=()=>{
      signOut(auth)
      .then(()=>{
        localStorage.removeItem("email",)
        setValue('')

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
      {value ? 
      
      <>

      <h1>welcome :{value.displayName}</h1>
      <Home/>
      <button onClick={handleSignout}>Sign Out</button>
      <img src={value.photoURL}/>
      </>
      
      : <button onClick={handleClick}>SingIN With Google</button>}
    </div>
  )
}

export default Singin
