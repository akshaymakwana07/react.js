import React from 'react'
import { useState,useMemo } from 'react'

function Example() {
const [isDarkMode,setisDarkMode] = useState(false)

const theme = useMemo (()=>{
    return {
        backgroundColor : isDarkMode ? "black" : "red",
        color : isDarkMode ? "white" : "blue"
    }
},[isDarkMode])

document.body.style.backgroundColor = theme.backgroundColor
document.body.style.color = theme.color

  return (
    <div>
     <center>
     <button onClick={()=>setisDarkMode(!isDarkMode)}>Tach</button>
      <h1 style={{
        width : 500
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam esse consequatur! Explicabo, distinctio doloribus pariatur suscipit architecto, consequatur incidunt voluptas quam quo sequi beatae! Autem consectetur saepe voluptas soluta?
      </h1>
     </center>
    </div>
  )
}

export default Example
