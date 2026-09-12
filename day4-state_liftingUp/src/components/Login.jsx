import React, { useState } from 'react'

const Login = ({setToggle}) => {

  
  return (
    <div className='flex flex-col gap-6  p-4 rounded-xl bg-white text-xl '>
      <h1 className='mx-auto text-3xl text-blue-700' >Login</h1>
      <form action="" className='flex flex-col gap-3 text-2xl'>
        <input className='border-gray-400 border-2 rounded-md  p-2  ' 
          
          type="text" 
          placeholder='email' 
        />
        <input className='border-gray-400 border-2 rounded-md  p-2  '

          type="password" 
          placeholder='password' 
        />
        <button className='rounded-md  p-2 bg-blue-600 text-white border-none '
        >Login</button>
      </form>

      <p> Didn't have an Account? <span onClick={() => setToggle((prev) => !prev)} className='text-blue-900 font-semibold cursor-pointer ' >Register here</span> </p>
    </div>
  )
}

export default Login
