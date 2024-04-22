import React, { useState, useEffect, useRef } from 'react';

function InputBox() {
    const inputRef = useRef(null);

    const [inputValue, setInputValue] = useState('');
    const handleChange = () => {
        setInputValue(inputRef.current.value);
    };
    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <div>
            <input type="text" ref={inputRef} value={inputValue} onChange={handleChange}/>
            <p>You typed:{inputValue}</p>
        </div>
    );
}

export default InputBox;