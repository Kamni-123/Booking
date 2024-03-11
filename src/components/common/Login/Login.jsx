import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-4 grow flex justify-around items-center'>
        <div className='mb-32'>
        <h1 className='font-bold text-lg  text-center'>LOGIN</h1>
        <div className='flex items-center'>
        <form className='max-w-screen-xl mx-auto'>
            <input type="email" placeholder="your@gmail.com" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <div className='text-centre py-2 text-gray-500'>Dont have an account yet?<Link className="underline text-black" to={"/register"}> Register now </Link></div>

        </form>
        </div>
        </div>
    </div>
  )
}

export default Login