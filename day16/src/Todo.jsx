import React, { useState } from 'react'

function Todo() {

    const [inputValue,setinputValue] = useState('')

    const [todos,setTodos] = useState ([])

    const [editId,setEditId] = useState(null)

    localStorage.setItem("todo",JSON.stringify(todos))
  
    function addTask (id){
    
      if(editId !=null){
        setTodos(todos.map(Todo=>{
          if(Todo.id === editId){
            return{...Todo , text : inputValue}
          }
          return Todo
        }))
        setEditId(null)
      }else{
        let newtodos = {
          id : new Date().getTime(),
          text : inputValue
      }
      setTodos([...todos,newtodos])
      setinputValue('')
  }
      }

      function deletetodo(id){

        console.log(id)
        
        setTodos(todos.filter((Todo ,i)=>(
          i !== id
        )))
      }

      function edittodo(id){
        const todoToedit = todos.find(Todo => Todo.id ===id)
        setinputValue(todoToedit.text)
        setEditId(id)
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
<div key={i}>
<h1>{el.text}</h1>
<button onClick={()=>deletetodo(i)}>Delete</button>
<button onClick={()=>edittodo(el.id)}>edit</button>
</div>

))
      }
      </center>
    </div>

  )
}

export default Todo
