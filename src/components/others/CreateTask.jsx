import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      taskDate,
      assignTo,
      category,
      active: false,
      status: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = userData.map((user) => {
      if (user.name === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
        };
      }
      return user;
    });

    setUserData(updatedData);
    console.log(userData);
    

    // Clear inputs
    setTitle('');
    setDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className='px-4 rounded'>
      <form onSubmit={handleSubmit} className='flex flex-wrap w-full bg-transparent items-start justify-between pt-2'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Task Title</h3>
            <input
              type='text'
              placeholder='Stand Up'
              className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Date</h3>
            <input
              type='date'
              className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4'
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Assign To</h3>
            <input
              type='text'
              placeholder='Employee Name'
              className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4'
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Category</h3>
            <input
              type='text'
              placeholder='Design, Dev, etc.'
              className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className='w-2/5'>
          <h3 className='text-sm text-gray-300 m-0.5'>Description</h3>
          <textarea
            placeholder='Task details...'
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type='submit' className='bg-emerald-500 hover:bg-emerald-600 px-4 py-5 rounded text-sm mt-2 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
