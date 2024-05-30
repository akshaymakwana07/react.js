

import React, { useMemo, useState } from 'react';

function Sec1() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = useMemo(() => ({
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black"
    }), [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='sec1' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="ph1">
                <div className="ph3">
                    <h3>HELLO! THIS IS AKSHAY</h3>
                    <h1>Creative Web Design & <br/>
                        Full Stack Developer
                    </h1>
                    <button className='btn1' onClick={toggleDarkMode}>Toggle Dark Mode</button>
                </div>
            </div>
            <div className="ph2">
                
            </div>
        </div>
    );
}

export default Sec1;
