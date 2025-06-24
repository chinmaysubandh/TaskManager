import React, { useEffect, useState } from 'react'
import { Header } from '../others/Header'
import { TasksListStats } from '../others/TasksListStats'
import { TaskLists } from '../TaskList/TaskLists'

export const EmployeeDashboard = (props) => {
  const [dataset, setDataset] = useState([])





  return (
    <div className=' p-10 bg-[#111] h-screen '>


      <Header changeUser={props.changeUser} data={props.data} />
      <TasksListStats data={props.data} />
      <TaskLists data={props.data} />
    </div>
  )
}
