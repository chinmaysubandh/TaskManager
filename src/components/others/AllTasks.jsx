import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export const AllTasks = () => {
  const Authdata = useContext(AuthContext);
  console.log(Authdata.employees);



  return (
    <div className='bg-[#1c1c1c] py-2 px-2 my-5 rounded-2xl h-60 '>

      <div className='bg-stone-800  px-4 gap-10 rounded-sm flex flex-col-12 h-[30%]'>
        <h2 className='  w-1/5 flex items-center justify-center bg-stone-700 my-2 rounded-sm text-xl font-bold '>Name</h2>
        <div className='flex justify-between gap-4  w-[80%]'>
          <div className='w-1/5 bg-amber-900 mx-4 my-2 px-2 py-2 rounded-sm text-xl text-center font-bold '>New Tasks</div>
          <div className='w-1/5 bg-blue-900 mx-4 my-2 px-2 py-2 rounded-sm text-xl text-center font-bold '>Accepted Tasks</div>
          <div className='w-1/5 bg-green-900 mx-4 my-2 px-2 py-2 rounded-sm text-xl text-center font-bold '>Completed Tasks</div>
          <div className='w-1/5 bg-red-900 mx-4 my-2 px-2 py-2 rounded-sm text-xl text-center font-bold '>Failed Tasks</div>
        </div>
      </div>
      <div className=' h-[70%] overflow-auto'>
        {Authdata.employees.map((e, index) => {
          return <div key={index} className='bg-stone-800 my-1 px-4 gap-10 rounded-sm flex flex-col-12'>
            <h2 className='  w-1/5 flex items-center justify-center text-center text-sm font-bold'>{e.name}   </h2>
            <div className='flex justify-between gap-4  w-[80%]'>
              <div className='w-1/5 bg-amber-900 mx-4 my-2 px-2 py-2 rounded-sm text-center text-sm font-semibold '>{e.taskcounts.newTask}</div>
              <div className='w-1/5 bg-blue-900 mx-4 my-2 px-2 py-2 rounded-sm text-center text-sm font-semibold '>{e.taskcounts.active}</div>
              <div className='w-1/5 bg-green-900 mx-4 my-2 px-2 py-2 rounded-sm text-center text-sm font-semibold '>{e.taskcounts.completed}</div>
              <div className='w-1/5 bg-red-900 mx-4 my-2 px-2 py-2 rounded-sm text-center text-sm font-semibold '>{e.taskcounts.failed}</div>
            </div>

          </div>
        })}
      </div>




    </div>
  )
}
