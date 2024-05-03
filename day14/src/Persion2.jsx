import React from 'react'
// import { useState } from 'react'
import Uc from './Uc'

function Persion2({money,handleincrease}) {
  return (
    <div>
      <h1>Vivek is offering :${money}</h1>
      <button onClick={handleincrease}>Click Me ?</button>
    </div>
  )
}

export default Uc(Persion2)
