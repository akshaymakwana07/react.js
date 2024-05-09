import React, { useState } from 'react'

function Todo() {

    const [inputValue,setinputValue] = useState('')

    const [todos,setTodos] = useState ([])

    localStorage.setItem("todo",JSON.stringify(todos))

    function addTask (){
        let newtodos = {
            text : inputValue
        }
        setTodos([...todos,newtodos])
        setinputValue('')
    }

  return (
    <div>
      <center>
      <h1>TODO LIST</h1>

      <input 
      type='text'
      placeholder='Enter Your Task'
      value={inputValue}
      onChange={(e)=>setinputValue(e.target.value)}
      />

      <button onClick={addTask}>ADD TASK</button>
      {

todos.map((el,i) => (

<h1 key={i}>{el.text}</h1>
))
      }
      </center>
    </div>

  )
}

export default Todo
