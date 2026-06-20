import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export const CreateTask = () => {
  const { userData = [], setUserData } = useContext(AuthContext) || {};

  const [title, setTaskTitle] = useState('');
  const [description, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const SubmitHandler = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    const trimmedAssignTo = asignTo.trim();
    const trimmedCategory = category.trim();

    if (!trimmedTitle || !trimmedDescription || !taskDate || !trimmedAssignTo || !trimmedCategory) {
      alert('Please fill in all fields before creating a task.');
      return;
    }

    const employeeExists = userData.some(
      (employee) => employee.name.toLowerCase() === trimmedAssignTo.toLowerCase()
    );

    if (!employeeExists) {
      alert('Employee not found. Please enter a valid employee name.');
      return;
    }

    const createdTask = {
      title: trimmedTitle,
      description: trimmedDescription,
      date: taskDate,
      category: trimmedCategory,
      active: false,
      status: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = userData.map((employee) => {
      if (employee.name.toLowerCase() === trimmedAssignTo.toLowerCase()) {
        const taskCounts = employee.taskcounts || {
          active: 0,
          newTask: 0,
          completed: 0,
          failed: 0,
        };

        return {
          ...employee,
          tasks: [...employee.tasks, createdTask],
          taskcounts: {
            ...taskCounts,
            newTask: taskCounts.newTask + 1,
          },
        };
      }
      return employee;
    });

    const normalizedData = updatedData.map((employee) => ({
      ...employee,
      tasks: employee.tasks || [],
      taskcounts: employee.taskcounts || {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
    }));

    setUserData(normalizedData);
    localStorage.setItem('employees', JSON.stringify(normalizedData));

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div className='px-4 rounded'>
      <form onSubmit={SubmitHandler} className='flex flex-wrap w-full bg-transparent items-start justify-between pt-2'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Task Title</h3>
            <input type="text" placeholder='Stand Up' className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' value={title} onChange={(e) => setTaskTitle(e.target.value)} />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Date</h3>
            <input type="date" className='w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 m-0.5'>Assign To </h3>
            <input type="text" placeholder='Employee Name' className=' w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' value={asignTo} onChange={(e) => setAsignTo(e.target.value)} />
          </div>
          <div className='flex-col items-start'>
            <h3 className='text-sm text-gray-300 m-0.5'>Category</h3>
            <input type="text" placeholder='Design , Dev , etc..' className=' w-4/5 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
        </div>
        <div className='w-2/5 flex-col items-start'>
          <h3 className='text-sm text-gray-300 m-0.5'>Description</h3>
          <textarea placeholder='Morning at 5Am' className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' value={description} onChange={(e) => setTaskDescription(e.target.value)} />
          <button className='bg-emerald-500 hover:bg-emerald-600 px-4 py-5 rounded text-sm mt-2 w-full'>Create Task</button>
        </div>
      </form>
    </div>
  );
};