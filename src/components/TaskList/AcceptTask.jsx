import React from 'react'

const AcceptTask = ({data}) => {
  return (
      <div className='h-full w-[300px] bg-yellow-800 rounded-xl shrink-0 '>
          <div className='flex justify-between items-center mt-4 m-4'>
              <h2 className='bg-red-600  rounded-2xl py-1 px-5 text-sm font-medium'>{data.category}</h2>
              <h4 className='text-sm font-medium'>{data.date}</h4>
          </div>
          <div className='m-4 gap-3  items-center  text-2xl font-medium text-blue-950'>
              <h2 className='mt-5 text-2xl font-semibold'>Task : {data.title}</h2>
              <p className='text-sm mt-2'>Description:{data.description}</p>
          </div>
          <div className='flex justify-between mt-2'>
              <button className='bg-green-900 ring-1 hover:bg-green-800 mx-3 my-1 px-2 rounded-4xl text-sm font-bold'>Mark as Completed</button>
              <button className='bg-red-900 ring-1 hover:bg-red-800 mx-3 my-1 px-2  rounded-full text-sm font-bold'>Mark as Failed</button>
          </div>
      </div>
  )
}

export default AcceptTask