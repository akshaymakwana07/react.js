import React, { memo } from 'react'

function Child({countwo,handleinc}) {
    console.log("child Component")
  return (

    <div>
      <h1>Child</h1>
      <h1>Counter : {countwo}</h1>
      <button onClick={handleinc}>Increment</button>
    </div>
  )
}

export default memo(Child)
