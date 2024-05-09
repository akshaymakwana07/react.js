import React from 'react'
import { useState } from 'react'
function Local() {

    const [titlevalue,setTitlevalue] = useState({
      'Title' : '',
      'Price': '',
      'Foodtype': '',
      'FoodIMG': ''
    })

    const [description,setDescription] = useState([])
localStorage.setItem("Local",JSON.stringify(description))
    
    const handleinput = (e)=> {
      e.preventDefault()
      const {name, value} = e.target
      setTitlevalue({
        ...titlevalue,
        [name] : value
        
      })
    }
    function addTask(e){
      e.preventDefault()
      console.log(titlevalue)
      setDescription([...description, titlevalue])
    }

    return (
    <div className='local'>
<center>
<form>
  
        <h1>Food Management System</h1>
        <label>Food Name</label><br/>
        <input type='text' name='Title' placeholder='Enter Title'
        value={titlevalue.Title}
        onChange={handleinput}
        /><br/><br/>

        <label>Enter Food Price</label><br/>
        <input 
        type='text'
        placeholder='Enter Food Price'
        name='Price' onChange={handleinput} value={titlevalue.Recipe}

        /><br/><br/>

        <label>Food type</label><br/>
        <input type='text' name='Foodtype' onChange={handleinput} value={titlevalue.Foodtype}/><br/><br/>

        <label>Food img</label><br/>
        <input name="FoodIMG" onChange={handleinput} value={titlevalue.FoodIMG}/> <br/><br/>

        <button onClick={addTask}>Submit</button>

        
        </form>

        {
          description.map((el)=>(
            <div className="card">
  <img src={el.FoodIMG} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{el.Title}</h5>
    <p className="card-text">{el.Price}</p>
    <p className="card-text">{el.Foodtype}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
          ))
        }
        </center>
    </div>
  )
}

export default Local
