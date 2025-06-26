import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

export const TaskLists = () => {
  const [userData] = useContext(AuthContext);

  // ✅ Safely get the logged-in email from localStorage
  const stored = JSON.parse(localStorage.getItem("loggedInUser"));
  const loggedInEmail = stored?.data?.email;

  // ✅ Get the logged-in user from context
  const loggedInUser = userData.find(user => user.email === loggedInEmail);

  if (!loggedInUser) {
    return <div className="text-white p-4">User not found or not logged in.</div>;
  }

  const tasks = loggedInUser.tasks || [];

  return (
    <div id='Tasklists' className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 overflow-auto flex-nowrap rounded-l-2xl rounded-r-2xl bg-gray-900'>
      {tasks.length === 0 ? (
        <p className="text-white ml-4">No tasks assigned.</p>
      ) : (
        tasks.map((task, index) => {
          if (task.active) {
            return <AcceptTask key={index} data={task} />;
          } else if (task.newTask) {
            return <NewTask key={index} data={task} />;
          } else if (task.completed) {
            return <CompleteTask key={index} data={task} />;
          } else if (task.failed) {
            return <FailedTask key={index} data={task} />;
          } else {
            return null;
          }
        })
      )}
    </div>
  );
};
