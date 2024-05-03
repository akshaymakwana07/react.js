import React from 'react'
// import { useState } from 'react'
import Uc from './Uc'

function Persion1({money,handleincrease}) {
  return (
    <div>
      <h1>Girish is offering :${money}</h1>
      <button onClick={handleincrease}>Click Me ?</button>
    </div>
  )
}

export default Uc(Persion1)
