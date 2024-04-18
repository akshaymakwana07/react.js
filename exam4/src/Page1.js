import React from 'react'
import { useState } from 'react'
import Blog from './Blog'
function Page1() {
    let  [ount,Setcount] = useState(0)
  function increment() {
      Setcount (ount  +1)
  }
  function decrement(){
      if(ount ==0){
          Setcount (0)
      }else{
          Setcount(ount-1)
      }

  }
  function clear (){
     
       Setcount(0)
      
  
    };
  return (
    <div>
          <h1>{ount}</h1>
    
        
    <button onClick={increment} id='bt1'>Increment</button>
    <button onClick={decrement} id='bt2'>Decrement</button>
    <button onClick={clear} id='bt3'>Clear</button>
    
    </div>
  )
}

export default Page1
