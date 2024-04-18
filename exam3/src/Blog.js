import React from 'react'
import { useState } from 'react'
function Blog(props) {

    const [isLoggedin, setisloggedin] = useState(false)
    function handleIn(){
        setisloggedin (!isLoggedin)
    }
  return (


    <div>
{
            isLoggedin ?
            
                <>
                <h1></h1>
                <button onClick={handleIn} id='btn1'>LOG OUT</button>

                <table id='table'>

                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>expiry</th>
                    </tr>

                {

                    
        props.orgData.map ((k)=>
        
           
                <tr key={k.id}>
                <td>{k.id}</td>
                <td>{k.name}</td>
                <td>{k.quantity}</td>
                <td>{k.price}</td>
                <td>{k.expiry}</td>
                </tr>

    )

      }
      </table>
                </>
          :
                <>
                <h1></h1>
                <button onClick={handleIn} id='btn2'>LOG IN</button>
                </>
                
            }


        
     
    </div>
  )
}

export default Blog
