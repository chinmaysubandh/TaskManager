import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Submithandler = (e) => {
        e.preventDefault()
        console.log("Your Email is ", email)
        console.log("Your Password is ", password)
        handleLogin(email,password);
        
        setEmail('')
        setPassword('')
    }
  return (
      <div className='flex items-center justify-center h-screen w-screen'>
          <div className='border-2 border-emerald-600 rounded-2xl px-20 py-18  bg-gray-800 '>
              <form
                  
                  onSubmit={(e) => {
                      Submithandler(e)
                  }}
                  className='flex flex-col items-center justify-center'>
                  <h3 className='text-4xl text-cyan-600  font-extrabold transition-transform mt-5 mb-10'>Welcome back<span className='text-3xl font-extrabold text-emerald-500'>..</span></h3>
                  <input
                      value={email}
                      onChange={(e) => {
                          
                          setEmail(e.target.value)
                      }}    
                      required className='flex bg-transparent outline-none border-2 border-emerald-600 py-4 px-8 rounded-full text-xl text-white placeholder:text-gray-500 m-2 ' type="email" placeholder='Enter Your Email' />
                  <input
                      value={password}
                      onChange={(e) => {
                          setPassword(e.target.value)
                      }}
                      required className='flex bg-transparent outline-none border-2 border-emerald-600 py-4 px-8 rounded-full text-xl text-white placeholder:text-gray-500 mt-5 m-2' type="password" placeholder='Enter Your Password' />
                  <button className='flex bg-emerald-700 outline-none border-2 border-emerald-600 py-2 px-8 rounded-full text-xl placeholder:text-white  m-2 mt-10'>Log In</button>
              </form>
              <div className='flex items-center justify-between text-white p-2 gap-3 '>
                  <label className=''>i don't have an account?</label>
                  <label>
                     <a>Forgot Password</a>
                  </label>
                 
                  
          </div>
          </div>
          
          
    </div>
  )
}

