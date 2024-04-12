import React from 'react'
import { useState, useEffect } from 'react'

function Fech() {
    const [data,setdata] = useState(null)
    useEffect (()=>{
      const  fechingdata = async () => {
        let res = await fetch('https://fakestoreapi.com/products')
        let jsondata = await res.json()
        console.log(jsondata)
        setdata(jsondata)
      }
      fechingdata()
    },[])


  return (
    <div >
      <ul>
        {
           data && data.map((el)=>(
       
            <li className='ok' >
              {el.title}
            <img src={el.image}></img>
            </li>
           
            
          ))
        }
      </ul>
    </div>
  )
}

export default Fech
