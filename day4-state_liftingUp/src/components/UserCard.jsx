import React from 'react'

const UserCard = ({user, del}) => {
 
  return (
    <div className='w-64 overflow-hidden rounded-xl bg-white border border-gray-400 shadow-lg' >
      <div className=' p-4 w-full h-60 rounded overflow-hidden' >
        <img className='w-full h-full object-cover' src={user.image} alt="" />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>
      </div>
      <button onClick={() =>del(user.name) }  className="mt-4 w-full rounded-md bg-red-500 p-2 text-white">delete</button>
    </div>

  )
}

export default UserCard;
