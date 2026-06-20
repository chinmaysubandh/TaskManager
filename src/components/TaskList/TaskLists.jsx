import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

export const TaskLists = ({ data }) => {
  const { userData = [], setUserData } = useContext(AuthContext) || {};

  const stored = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  const loggedInEmail = stored?.data?.email;

  const matchingUserFromContext = userData.find(
    (user) => user.email === (data?.email || loggedInEmail)
  );
  const loggedInUser = matchingUserFromContext || data || userData.find((user) => user.email === loggedInEmail);

  if (!loggedInUser) {
    return <div className="text-white p-4">User not found or not logged in.</div>;
  }

  const tasks = loggedInUser.tasks || [];

  const getTaskCounts = (taskList = []) => {
    return taskList.reduce(
      (counts, task) => {
        if (task.newTask) counts.newTask += 1;
        else if (task.active) counts.active += 1;
        else if (task.completed) counts.completed += 1;
        else if (task.failed) counts.failed += 1;
        return counts;
      },
      { active: 0, newTask: 0, completed: 0, failed: 0 }
    );
  };

  const updateTaskStatus = (taskIndex, updates) => {
    if (!setUserData) return;

    setUserData((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        if (user.email !== loggedInUser.email) return user;

        const updatedTasks = (user.tasks || []).map((task, index) =>
          index === taskIndex ? { ...task, ...updates } : task
        );

        return {
          ...user,
          tasks: updatedTasks,
          taskcounts: getTaskCounts(updatedTasks),
        };
      });

      localStorage.setItem('employees', JSON.stringify(updatedUsers));

      const currentSession = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
      if (currentSession?.role === 'employee' && currentSession?.data?.email === loggedInUser.email) {
        const updatedCurrentUser = updatedUsers.find(
          (user) => user.email === loggedInUser.email
        );
        if (updatedCurrentUser) {
          localStorage.setItem(
            'loggedInUser',
            JSON.stringify({ role: 'employee', data: updatedCurrentUser })
          );
        }
      }

      return updatedUsers;
    });
  };

  const handleAcceptTask = (taskIndex) => {
    updateTaskStatus(taskIndex, {
      active: true,
      newTask: false,
      completed: false,
      failed: false,
    });
  };

  const handleRejectTask = (taskIndex) => {
    updateTaskStatus(taskIndex, {
      active: false,
      newTask: false,
      completed: false,
      failed: true,
    });
  };

  const handleCompleteTask = (taskIndex) => {
    updateTaskStatus(taskIndex, {
      active: false,
      newTask: false,
      completed: true,
      failed: false,
    });
  };

  const handleFailTask = (taskIndex) => {
    updateTaskStatus(taskIndex, {
      active: false,
      newTask: false,
      completed: false,
      failed: true,
    });
  };

  return (
    <div id='Tasklists' className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 overflow-auto flex-nowrap rounded-l-2xl rounded-r-2xl bg-gray-900'>
      {tasks.length === 0 ? (
        <p className="text-white ml-4">No tasks assigned.</p>
      ) : (
        tasks.map((task, index) => {
          if (task.active) {
            return (
              <AcceptTask
                key={index}
                data={task}
                onComplete={() => handleCompleteTask(index)}
                onFail={() => handleFailTask(index)}
              />
            );
          } else if (task.newTask) {
            return (
              <NewTask
                key={index}
                data={task}
                onAccept={() => handleAcceptTask(index)}
                onReject={() => handleRejectTask(index)}
              />
            );
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
