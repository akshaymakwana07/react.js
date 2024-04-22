import React, {useState,useRef} from 'react'

function Uncontrolld() {
    const inputRef = useRef(null)
    const inputref2 = useRef(null)
    function handlesubmit(e){
        e.preventDefault()
        alert(`name : ${inputRef.current.value}`)
    }
  return (
    <div className='unform'>
        <center>
        <h1>Uncontrolled From</h1>
      <form onSubmit={handlesubmit}>


        <label>Enter your Name :</label> <br></br>
        <input type='text' ref={inputRef} /><br></br><br></br><br></br>


        <label>Enter your Password</label> <br></br>
        <input type='password' ref={inputref2}/> <br></br><br></br><br></br>

        <button type='submit'>Submit</button>
      </form>
      </center>
    </div>
  )
}

export default Uncontrolld
