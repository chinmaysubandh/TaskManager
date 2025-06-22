import React, { useEffect, useState } from 'react'
import { Header } from '../others/Header'
import { TasksListStats } from '../others/TasksListStats'
import { TaskLists } from '../TaskList/TaskLists'

export const EmployeeDashboard = ({data}) => {
  const [dataset, setDataset] = useState([])
  console.log(data);
  
  
  useEffect(() => {
    fetch('https://679a55e3747b09cdccce8867.mockapi.io/Todo')
      .then((res) => res.json())
      .then((JSON) => {
        setDataset(JSON)
      })
  }, [])

  return (
    <div className=' p-10 bg-[#111] h-screen '>
      

      <Header data={data} />
      <TasksListStats data={data} />
      <TaskLists data={data} />
    </div>
  )
}
