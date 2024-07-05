// import { set } from 'firebase/database'
// import React from 'react'
// import { useState } from 'react'
// import { ref } from 'firebase/database'
// import { database } from './Firebase'

// function Registresion() {
//     const [name,setName] = useState("")
//     const [password,setPassword] = useState("")

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const newuserRef = ref(database, `users/${name}`);
//         set( newuserRef, {name , password})
//         setName("")
//         setPassword("")
//     }

//   return (
//     <div className='main'>
    
//      <form onSubmit={handleSubmit}>
//         <h1>Registresion Form</h1>


//      <input className='input' placeholder='Enter User Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/> 
     
//      <input className='input' placeholder='Enter your Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

//      <button className='btn1' type='submit'>Submit</button>
//      </form>
  
//   </div>
//   )
// }

// export default Registresion

import React, { useState, useEffect } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { database } from './Firebase';

function Registration() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !password) {
            alert("Please fill in both fields");
            return;
        }

        const newUserRef = ref(database, `users/${name}`);
        set(newUserRef, { name, password })
            .then(() => {
                alert("User registered successfully");
                setName("");
                setPassword("");
            })
            .catch((error) => {
                alert("Error registering user: " + error.message);
            });
    };

    useEffect(() => {
        const usersRef = ref(database, 'users/');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setUsers(data);
            } else {
                setUsers({});
            }
        });
    }, []);

    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <input
                    className='input'
                    placeholder='Enter User Name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='input'
                    placeholder='Enter your Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='btn1' type='submit'>Submit</button>
            </form>
          <div>
            <h1>Registered Users</h1>
            <ul>
                {Object.keys(users).map((key) => (
                    <h6 key={key}>
                        Name: {users[key].name}, Password: {users[key].password}
                    </h6>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Registration;
