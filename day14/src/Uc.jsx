import React from 'react'
import { useState } from 'react'     

function Uc(Original) {
    function NewComponent(){
        const [money, setMoney] = useState(100)

        function handleincrease(){
            setMoney(money*2)
        }
        return <Original money = {money} handleincrease = {handleincrease} />
    }
  return NewComponent
}

export default Uc
