import React from 'react'
import { useState, useMemo } from 'react';

function Sec2() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = useMemo(() => ({
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black"
    }), [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
  return (
    <div className='sec2' style={{ backgroundColor: theme.backgroundColor, color: theme.color}}>
      <div className="about">
        <div className="abt1"></div>
        <div className="abt2">
            <h3 className='abab'>MY INTRO</h3>
            <h1>About Me</h1>
            <p>A small river named Duden flows by their place and supplies it with the <br />
             necessary regelialia. It is a paradisematic country, in which roasted parts <br />
              of sentences fly into your mouth.</p>
              <h3>Name:<span>Akshay Makwana</span></h3> 
              <h3>Date of birth: <span>May 24, 2002</span></h3>
              <h3>Address: <span>Ambardi, jasdan</span></h3>
              <h3>Zip Code: <span>2739</span></h3>
              <h3>Email: <span>akshaymakwana2739@gmail.com</span></h3>
              <h3>Phone: <span>9558099011</span></h3>
              <button className='btn1' onClick={toggleDarkMode}>Toggle Dark Mode</button>

        </div>

      </div>
    </div>
  )
}

export default Sec2
