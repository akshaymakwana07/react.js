import React from 'react'
import { useState, useEffect} from 'react'



function Fetch1() {

    const[data,setdata]=useState(null)

    useEffect(()=>{
      const fetchingdata = async () =>{
        let respons = await fetch('https://fakestoreapi.com/products')
        let jsondata = await respons.json()
        console.log(jsondata)
        setdata(jsondata)
    }
    fetchingdata()
    },[])
  

  return (
    <div>

      <ul>
        {
        data && data.map((el)=>(
          <h5>{el.title}</h5>
        ))
      }
      </ul>
      
    </div>
  )
}

export default Fetch1
