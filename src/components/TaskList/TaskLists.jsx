import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

export const TaskLists = ({ data }) => {
  
  return (
    <div id='Tasklists' className='h-[55%] w-full py-5  mt-10 flex items-center justify-start gap-5 overflow-auto flex-nowrap rounded-l-2xl rounded-r-2xl bg-gray-900 '>
      {data.tasks.map((e,index) => {
        if (e.active) {
          return <AcceptTask key={index}  data={e} />
          
        } 
        if (e.newTask) {
          return <NewTask key={index} data={e}/>
        }
        if (e.completed) {
          return <CompleteTask key={index} data={e}/>
          
        }
        if (e.failed) {
          return <FailedTask key={index} data={e}/>
        }
      })}
     

      

      


      

   

      

      

      
    </div>

    
  )
}

