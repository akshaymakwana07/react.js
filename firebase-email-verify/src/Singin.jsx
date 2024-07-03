import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from './firebase'; // Ensure you import your initialized auth object

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      console.log("Creating user with email:", email);
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      console.log("User created:", user);

      console.log("Sending email verification...");
      await sendEmailVerification(user);
      console.log("Email verification sent");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className='main'>
      <div className='child'>
        <InputField 
          className='input'
          value={email}
          type="email"
          placeholder='Enter your email'
          handleChange={setEmail}
        />
        <InputField 
          className='input'
          value={password}
          type="password"
          placeholder='Enter your password'
          handleChange={setPassword}
        />
        <button className='btn1' type='button' onClick={signUp}>Sign Up</button>
      </div>
    </div>
  );
}

const InputField = ({ placeholder, handleChange, type, value }) => {
  const handleChangeEvent = (e) => {
    handleChange(e.target.value);
  };

  return (
    <input 
      className='input'
      onChange={handleChangeEvent}
      value={value}
      type={type}
      placeholder={placeholder} 
    />
  );
};

export default Signin;
