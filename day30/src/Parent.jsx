import React, { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child'
function Parent() {

    const [count,setCount] = useState(0)
    const [countwo,setCountwo] = useState(0)

    const handleClick =()=>{
        setCount(count+1)
    }

    const handleinc = useCallback(()=>{
        setCountwo(countwo+1)
    },[countwo])
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <Child countwo={countwo} handleinc={handleinc}/>
    </div>
    
  )
}

export default Parent
