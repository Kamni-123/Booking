
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios";

const RegisterPage = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");
  async function registerUser(ev){
    ev.preventDefault();
    try{

    
    await axios.post("/register", {
      name,
      email,
      password,
    });
    alert("User registration successful");
    setRedirect("true");
  }catch(e){
      alert("User registration failed");
    }

  }

  if (redirect) {
    return <Navigate to="/login" />
  }
  return (
    <div className='mt-4 grow flex justify-around items-center'>
        <div className='mb-32'>
        <h1 className='font-bold text-lg  text-center'>Register</h1>
        <div className='flex items-center'>
        <form className='max-w-screen-2xl mx-auto' onSubmit={registerUser}>
            <input type="text" placeholder="Name" value={name} onChange={ev => setName(ev.target.value)} />
            <input type="email" placeholder="your@gmail.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button type="submit">Register</button>
            <div className='text-centre py-2 text-gray-500'>Already a member! <Link className="underline text-black" to={"/login"}> Login </Link></div>

        </form>
        </div>
        </div>
    </div>
  )
}

export default RegisterPage;