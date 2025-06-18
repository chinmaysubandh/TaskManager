import React from 'react'
import { Header } from '../ohters/Header'
import { CreateTask } from '../ohters/CreateTask'
import { AllTasks } from '../ohters/AllTasks'

export const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />
      <CreateTask />
      <AllTasks/>
    </div>
  )
}
