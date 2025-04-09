import React from 'react';

const TaskStatus = ({ data }) => {
  if (!data || !data.taskCount) {
    
    return <div>Loading...</div>;  
  }

  return (
    <div className='flex justify-between items-start p-10 font-bold text-white'>
      <div className='bg-blue-400 rounded-2xl w-[22%] p-7'>
        <h1 className='text-3xl'>{data.taskCount.activeTask}</h1>  
        <h2 className='text-3xl'>Active</h2>
      </div>
      <div className='bg-red-400 rounded-2xl w-[22%] p-7'>
        <h1 className='text-3xl'>{data.taskCount.completedTask }</h1> 
        <h2 className='text-3xl'>Completed</h2>
      </div>
      <div className='bg-green-400 rounded-2xl w-[22%] p-7'>
        <h1 className='text-3xl'>{data.taskCount.newTask }</h1>  
        <h2 className='text-3xl'>New task</h2>
      </div>
      <div className='bg-yellow-400 rounded-2xl w-[22%] p-7'>
        <h1 className='text-3xl'>{data.taskCount.failedTask }</h1>  
        <h2 className='text-3xl'>Failed</h2>
      </div>
    </div>
  );
};

export default TaskStatus;
