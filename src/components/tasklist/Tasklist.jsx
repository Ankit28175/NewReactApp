import React from 'react';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import AcceptTask from './AcceptTask';
import FailedTask from './FailedTask';

const Tasklist = ({ data }) => {
  // Check if data or data.tasks is null or undefined
  if (!data || !data.tasks) {
              // Display a loading message or spinner
  }

  return (
    <div id="tasklist" className="overflow-auto flex w-[97%] h-[35%] mx-5">
      {data.tasks.map((elem,idx) => {
        if (elem.activeTasks) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.completedTasks) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.newTasks) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.failedTasks) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null; // Handle edge case where no task type matches
      })}
    </div>
  );
};

export default Tasklist;
