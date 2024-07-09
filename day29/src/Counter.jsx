import React from 'react'
import { useDispatch, useSelector} from "react-redux"
import { decrement, increment } from './Store'


function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.count)
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button className='btn1' onClick={()=>dispatch(increment())}>+</button>
      <button className='btn2' onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
