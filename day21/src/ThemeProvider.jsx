import React, { useState } from 'react'
import ThameContext from './ThemeContext'

function ThemeProvider({children}) {

    const [theme, setTheme] = useState('light')

    const toggleTheme =()=>{
        setTheme (prevThame => (prevThame === "light" ? "dark" : "light"))
    }
  return (
    <ThameContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThameContext.Provider>
  )
}

export default ThemeProvider
