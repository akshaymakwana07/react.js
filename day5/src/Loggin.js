import React from 'react'
import { useState } from 'react'

function Loggin() {
    const [isLoggedin, setisloggedin] = useState(false)

    function handleIn(){
        setisloggedin (!isLoggedin)
    }
    
  return (
    <div>
        {
            isLoggedin ?
            
                <>
                <h1>welcome to our website</h1>
                <button onClick={handleIn}>Log Out</button>
                </>
          :
                <>
                <h1>Plaase Login</h1>
                <button onClick={handleIn}>Log In</button>
                </>
                
            }
            
              </div>
            
     
  

    )
            }

export default Loggin
