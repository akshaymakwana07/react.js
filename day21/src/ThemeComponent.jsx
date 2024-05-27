import React, { useContext } from 'react'
import ThameContext from './ThemeContext'

function ThemeComponent() {

    const {theme} = useContext(ThameContext)
  return (
    <div
      style={{
        background : theme === "light" ? "white" : "black",
        color : theme === "light" ? "black" : "white",
        height : "100vh"
      }}
      >
      <h1>Theme Component</h1>
     
    </div>
    
  )
}

export default ThemeComponent
