import React from 'react'
import { useState, useEffect } from 'react'
import Counter from './Counter'

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
    <div className='prodect'>
      <div className='pr1'>
        {
           data && data.map((el)=>(
       
            <div className='ok' >
             {el.title}
            <img src={el.image}></img>
            {el.price}
          <Counter/>

            </div>
           
            
          ))
        }
       
      </div>
      
    </div>
  )
}

export default Fech
