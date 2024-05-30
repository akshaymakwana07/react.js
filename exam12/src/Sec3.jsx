import React from 'react'
import { useState,useMemo } from 'react'
function Sec3() {
    const [isDarkMode, setIsDarkMode] = useState (false)
    const theme = useMemo(()=>({
        backgroundColor: isDarkMode ? "black" : "white",
        color : isDarkMode ? "white" : "black"
    }),[isDarkMode])

    const toggleDarkMode = () => {
setIsDarkMode(!isDarkMode)
    }
  return (
    <div className='sec3' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        <div className="project1">
            <h3>ACCOMPLISHMENTS</h3>
            <h1>Our Projects</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <button className='btn1' onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
        <div className="project2">
            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-1.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-2.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-3.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-4.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-5.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-6.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-7.jpg" alt="" />
            </div>

            <div className="proje1">
                <img src="https://preview.colorlib.com/theme/clyde/images/work-8.jpg" alt="" />
            </div>
            
        </div>

      
    </div>
  )
}

export default Sec3
