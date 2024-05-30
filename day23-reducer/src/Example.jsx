import React, { useReducer } from 'react'
import initialState from './initialState'
import { increment , decrement } from './actions'
import reducer from './Reducer'

function Example() {

    const [state, dispatch] = useReducer (reducer , initialState)
    const handleIncrement = (id) =>{
        dispatch(increment(id))
    }

   
    const handleDecrement = (id) =>{
        dispatch(decrement(id))
    }

    const total = state.prices.reduce((sum , item)=>sum + item.value , 0)
  return (
    <div>
      {
        state.prices.map(item=>(
            <>
            <h1>Prices RS:{item.price}</h1>
            <h1>Amount:{item.value}</h1>
            <button onClick={()=>handleIncrement(item.id)}>Increment</button>
            <button onClick={()=>handleDecrement(item.id)}>decrement</button>
            </>

           
        ))
      }
       <h1>TOTAL :{total}</h1>
    </div>
  )
}

export default Example
