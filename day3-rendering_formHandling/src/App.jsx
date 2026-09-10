import React, { useState } from 'react'

const App = () => {

  let [formData, setFormData] = useState({});

  const handleChange = (e) => {  
        let {name, value} = e.target;
        setFormData({ ...formData, [name]: value })

  }
  
  return (
    <div className='flex flex-col gap-5 w-60 ' >
      <input 
      name='name'
      onChange={handleChange
      } className='border-2'
       type="text"
        placeholder='name' />

      <input
      name='email'
       onChange={handleChange} className='border-2' type="text" placeholder='email' />

      <input 
      name='password'
      onChange={handleChange} className='border-2' type="text" placeholder='password' />

      <button className='border-2'>submit</button>

      <h1 className='text-lg'>this is {formData.name}</h1>
      <h1 className='text-lg'>this is {formData.email}</h1>
      <h1 className='text-lg'>this is {formData.password}</h1>
    </div>
  )
}

export default App
