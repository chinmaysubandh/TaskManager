import React from 'react'
import { Header } from '../others/Header'
import { CreateTask } from '../others/CreateTask'
import { AllTasks } from '../others/AllTasks'

export const AdminDashboard = ({data,changeUser}) => {


  return (
    <div className='h-screen w-full p-10 text-white'>

      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  )
}
