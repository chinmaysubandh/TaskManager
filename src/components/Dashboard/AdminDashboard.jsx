import React from 'react'
import { Header } from '../others/Header'
import { CreateTask } from '../others/CreateTask'
import { AllTasks } from '../others/AllTasks'

export const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <CreateTask />
      <AllTasks />
    </div>
  )
}
