import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard'

const App = () => {
  let [toggle, setToggle]  = useState(false);
  let [users, setUsers] = useState([]);

  const deleteUser = (userName) => {
    let userData = users.filter((elem) => elem.name != userName)

    setUsers(userData);
  }

  
  return (
    <div className='h-screen relative  bg-gray-300 font-sans'>
      <div className='flex justify-center items-center h-full'>
        {toggle ? <Login setToggle = {setToggle} />: <Register setUsers = {setUsers} setToggle = {setToggle} />}
      </div>

      
      <div className="absolute top-5 left-5 flex gap-4">
        {
          users.map((elem, index) => <UserCard key={index} user={elem} del = {deleteUser} />)
        }
      </div>
      
    </div>
  )
}

export default App
