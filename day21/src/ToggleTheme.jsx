import React, { useContext } from 'react'
import ThameContext from './ThemeContext'

function ToggleTheme() {

    const {theme, toggleTheme} = useContext(ThameContext)
  return (
    <button onClick={toggleTheme}>
        switch to {theme === "light" ? "dark" : "light"}
        
    </button>
  )
}

export default ToggleTheme
