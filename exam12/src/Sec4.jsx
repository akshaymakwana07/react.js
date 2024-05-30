import React from 'react'


import { useMemo, useState } from 'react';
function Sec4() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = useMemo(() => ({
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black"
    }), [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
  return (
    <div className='sec4' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="contact1">
        <h3>CONTACT US</h3>
        <h1>Have a Project?</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia</p>
      </div>
      <div className="contact2">
        <div className="count">
        <div className="cont1">
          <input  type="text" placeholder='Your Name' /> <br /><br /><br />
          <input  type="text" placeholder='Your Email' /> <br /> <br /><br />
          <input type='text' placeholder='Subject'/> <br /> <br /><br/> 
          <textarea name="" id="" placeholder='message'></textarea> <br /><br />
          <button>SEND MESSAGE</button>
        </div>
        <div className="cont2">
          <h2>Address:</h2> 
          <h3>Ambardi,jasdan</h3> 

          <h2>Phone:</h2>
          <h3>9558099011</h3> 

          <h2>Email:</h2>
          <h3>akshaymakwana2739@gmail.com</h3>

          <h2>Website</h2>
          <h3>yoursite.com</h3>

          <button className='btn1' onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Sec4
