import React from 'react'

export const TasksListStats = () => {
    let num = Math.floor(Math.random() * 10);
    
  return (
      <div className='flex mt-10  justify-between gap-5 screen'>
          <div className=' w-[45%] bg-blue-400 py-6 px-8 rounded-xl'>
              <h2 className='text-3xl font-extrabold'>{num+72}</h2>
              <h3 className='text-xl font-medium'>New Tasks</h3>
          </div>
          <div className=' w-[45%] bg-yellow-400 py-6 px-8 rounded-xl'>
              <h2 className='text-3xl font-extrabold'>{num}</h2>
              <h3 className='text-xl font-medium'>Accepted Tasks</h3>
          </div>
          <div className=' w-[45%] bg-green-400 py-6 px-8 rounded-xl'>
              <h2 className='text-3xl font-extrabold'>{num+27}</h2>
              <h3 className='text-xl font-medium'>Completed Tasks</h3>
          </div>
          <div className=' w-[45%] bg-red-400 py-6 px-8 rounded-xl'>
              <h2 className='text-3xl font-extrabold'>{num+2}</h2>
              <h3 className='text-xl font-medium'>Failed Tasks</h3>
          </div>
    </div>
  )
}
