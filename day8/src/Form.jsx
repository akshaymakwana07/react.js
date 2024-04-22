import React, {useState} from 'react'

function Form() {

    const [inputvalue,setinputvalue] = useState("")
    const [inputvalue2,setinputvalue2] = useState('')

    function handlesubmit(e){
        e.preventDefault()
        alert(`${inputvalue}`)
    }
  return (
    <div className='conform'>
<center>
        <h1>Controlled Form</h1>
      <form onSubmit={handlesubmit}>
    <label>Enter Your Name :</label><br></br>
    <input type='text' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
<br></br><br></br><br></br>     
    <label>Enter your Password</label><br></br>
    <input type='password' value={inputvalue2} onChange={(e)=>setinputvalue2(e.target.value)}/>
<br></br><br></br><br></br>
    <button type='submit'>Submit</button>
      </form>
      </center>
    </div>
  )
}

export default Form
