import React from 'react'
import { useState,useEffect } from 'react'
import Page1 from './Page1'
function Blog() {

    const [data,setdata] = useState(null)
    useEffect (()=>{
      const  fechingdata = async () => {
        let res = await fetch('https://api.sampleapis.com/countries/countries')
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
            <h1 id='heding'>{el.name}</h1>
           {el.capital} <br></br>
           {el.phone}
           {/* {el.population} */}
          <img src={el.media.flag}></img>
          {el.price}
        <Page1/>

          </div>
         
          
        ))
      }
     
    </div>
    
  </div>
    
  )
}

export default Blog
