import React,{useState} from 'react'

const Register = ({setToggle, setUsers}) => {

  const [formData, setFormData] = useState({
    name : '',
    email: '',
    password :'',
    image : ''
  });
  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name :'',
      email : '',
      password : '',
      image : ''
    })
  }

  return (
    <div className='flex flex-col gap-6  p-4 rounded-xl bg-white text-xl '>
      <h1 className='mx-auto text-3xl text-blue-700' >Register</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-3 text-2xl'>
        <input className='border-gray-400 border-2 rounded-md  p-2  ' 
          required
          value={formData.name}
          onChange={handleChange}
          name = 'name' 
          type="text" 
          placeholder='name' 
        />
        <input className='border-gray-400 border-2 rounded-md  p-2  '  
          required
          value={formData.email}
          onChange={handleChange}
          name='email'
          type="text" 
          placeholder='email' 
        />
        <input className='border-gray-400 border-2 rounded-md  p-2  '  
          required
          value={formData.password}
          onChange={handleChange}
          name='password'
          type="password" 
          placeholder='password' 
        />

        <input className='border-gray-400 border-2 rounded-md  p-2  ' 
          required
          value={formData.image}
          onChange={handleChange}
          name = 'image' 
          type="text" 
          placeholder='url' 
        />

        <button className='rounded-md  p-2 bg-blue-600 text-white border-none '
        >Register</button>
      </form>

      <p> Already have an Account? <span onClick={() => setToggle((prev) => !prev)} className='text-blue-900 font-semibold cursor-pointer ' >Login here</span> </p>
    </div>
  )
}

export default Register
