import React from 'react'
import{useState} from 'react'
function Counter2() {

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
        
    }
  return (
    <div>
    
    <h1>Counter:{ount}</h1>
    
        
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={clear}>Clear</button>
      </div>
    
  )
}

export default Counter2
