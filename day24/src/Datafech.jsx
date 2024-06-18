import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Datafech() {
    const [data,setData] = useState ([])

    useEffect(()=>{
        const fechingData = async()=>{
            try {
                let  response = await axios.get('https://fakestoreapi.com/products')
                setData(response.data)
            } catch(err){
                console.log("Error")
            }
        }
        fechingData()
    },[])


  return (
    <div className='main'>
    {
        data.map((el)=>(
            
            <div className='child'>
            <h4 id='id'>{el.id}</h4>
            <h1 id='title'>{el.title}</h1>
            <img id='image' src={el.image} alt="" />
            <h2 id='price'>{el.price}</h2>
            <h3 id='category'>{el.category}</h3> 
            <p>{el.description}</p>
            </div>
        ))
    }
    </div>
  )
}

export default Datafech
