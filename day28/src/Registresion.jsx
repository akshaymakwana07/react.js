
import React, { useState, useEffect } from 'react';
import { ref, set, onValue, remove,update } from 'firebase/database';
import { database } from './Firebase';

function Registration() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [update,setUpdate] = useState(false) 
   

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

    const handleDelete=(userName)=>{
        const newUserRef = ref(database, `users/${userName}`);
        remove(newUserRef)
        .then(()=>{
            alert("DELETED")
        }).catch((Err)=>{
            console.log(Err)
        })
    }
    const handleUpdate = (user) => {
        setName(user.name)
        setPassword(user.password)
        setUpdate(true)
    };

   

    useEffect(() => {
        const usersRef = ref(database, 'users');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const userList = Object.keys(data).map((key) => ({
                    name: key,
                    ...data[key]
                }));
                setUsers(userList);
            } else {
                setUsers([]);
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
                    {users.map((user) => (
                        <>
                        <h1> Name: {user.name}</h1>
                        <button id='btn1' onClick={()=>handleDelete(user.name)}>DELETE</button>
                        <button id='btn2' onClick={() => handleUpdate(user)}>UPDATE</button>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Registration;
