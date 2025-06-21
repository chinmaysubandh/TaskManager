import React from 'react'

export const Header = ({data}) => {
  return (
      <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>Hello<br /><span className='font-bold text-4xl'>{data.name}👋</span></h1>
          <button className='bg-red-800 text-2xl font-medium px-5 py-2 rounded-sm text-gray-950 hover:bg-red-500'>LogOut</button>
    </div>
  )
}