import React, { useEffect, useState } from 'react'

export const Header = (props) => {
  const [username, setUserName] = useState('chinmay');
  useEffect(() => {
    if (!props.data) {
      setUserName("Default Admin")
    } else {
      setUserName(props.data.name)
    }
  },[])
  


  /* useEffect(() => {
    if (!props.data) {
      setUserName('No one');
    } else {
      setUserName(props.data.changeUser)
      
      
    }
  }, []) */

  const LogoutHandler = () => {
    localStorage.removeItem('loggedInUser')
    
    
    props.changeUser(null);
  
  }

  return (
    <div className='flex items-end justify-between text-white mx-4'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='font-bold text-4xl'>{username}👋</span></h1>
      <button className='bg-red-800 text-2xl font-medium px-5 rounded-sm text-gray-950 hover:bg-red-500' onClick={(e) => {
        LogoutHandler(e)
        window.location.reload();
       }}>LogOut</button>
    </div>
  )
}