import React from 'react'

export const CreateTask = () => {
  return (
    <div className='p-5 mt-7 rounded'>
        <form className='flex flex-wrap w-full bg-transparent items-start justify-between p-5' >
          <div className='w-1/2'>
            <div >
            <h3 className='text-sm text-gray-300  m-0.5'>Task Title</h3>
            <input type="text" placeholder='Stand Up' className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
            </div>
            
            <div>
            <h3 className='text-sm text-gray-300  m-0.5'>Date</h3>
            <input type="date" className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
            </div>
            
          <div>
            <h3 className='text-sm text-gray-300  m-0.5'>Assign To </h3>
            <input type="text" placeholder='Employee Name' className=' w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
            </div>
            
          <div className=' flex-col items-start'>
            <h3 className='text-sm text-gray-300  m-0.5'>Catagory</h3>
            <input type="text" placeholder='Design , Dev , etc..' className=' w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
            </div>
            
          </div>
          
          <div className='w-2/5 flex-col items-start'>
            <h3 className='text-sm text-gray-300  m-0.5'>Description</h3>
            <textarea type="textarea" placeholder='Morning at 5Am' className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
            <button className='bg-emerald-500 hover:bg-emerald-600 px-4 py-5 rounded text-sm mt-2 w-full '>Create Task</button>
          </div>
          
          
          
          
          
          
          
        </form>
      </div>
  )
}
