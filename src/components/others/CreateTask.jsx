import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  
  
  const [employees, setEmployees] = useState([]);

  
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      date,
      category,
      description,
      newTasks: true,
      failedTasks: false,
      activeTasks: false,
      completedTasks: false,
    };

    
    setTitle('');
    setDate('');
    setAsignTo('');
    setCategory('');
    setDescription('');

    
    const updatedEmployees = employees.map((employee) => {
      if (asignTo === employee.name) {
        employee.tasks.push(newTask);
    
        if (employee.taskCount) {
          employee.taskCount.newTask += 1;
        } else {
          employee.taskCount = { newTask: 1, failedTasks: 0, activeTasks: 0, completedTasks: 0 };
        }
      }
      return employee;
    });

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    setEmployees(updatedEmployees);
  };

  return (
    <div className="bg-emerald-50">
      <form onSubmit={handleSubmit} className="flex items-start justify-between p-15">
        <div>
          <h1 className="text-xl m-3 font-bold text-emerald-600">Task Title</h1>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[280px] p-2 outline-0 placeholder:text-gray-400 border-2 border-emerald-300 rounded"
            type="text"
            placeholder="Make a UI design"
          />
          <h1 className="text-xl m-3 font-bold text-emerald-600">Date</h1>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[280px] placeholder:text-gray-400 p-2 outline-0 border-2 border-emerald-300 rounded"
            type="date"
            placeholder="dd/mm/yyyy"
          />
          <h1 className="text-xl m-3 font-bold text-emerald-600">Assign To</h1>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className="w-[280px] placeholder:text-gray-400 p-2 outline-0 border-2 border-emerald-300 rounded"
            type="text"
            placeholder="Employee name"
          />
          <h1 className="text-xl m-3 font-bold text-emerald-600">Category</h1>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[280px] placeholder:text-gray-400 p-2 outline-0 border-2 border-emerald-300 rounded"
            type="text"
            placeholder="Design, Dev, etc."
          />
        </div>
        <div className="mr-20">
          <h1 className="text-xl font-bold text-emerald-600">Description</h1>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-[280px] p-2 outline-0 border-2 border-emerald-300 rounded h-28"
          ></textarea>
          <br />
          <button className="bg-emerald-600 text-white font-bold p-2 m-2 w-[280px] mt-10 rounded">
            Create Task
          </button>
        </div>
      </form>
      <div className='bg-emerald-50 p-3 text-white m-3 h-70 '>
    
    <div className='flex rounded justify-between font-bold text-2xl bg-green-400 p-2 m-3' > 
        <h2 className='w-1/5'>Name</h2>
        <h3 className='w-1/5'>NewTask</h3>
        <h4 className='w-1/5'>Active</h4>
        <h4 className='w-1/5'>Completed</h4>
        <h4 className='w-1/5'>failed</h4>
      </div>
    <div className=''>
    {employees.map((e) => {
    return (
      <div className='flex rounded font-bold justify-between text-2xl bg-green-400 p-2 m-3' key={e.id}> 
        <h2 className='w-1/5'>{e.name}</h2>
        <h3 className='w-1/5' >{e.taskCount.newTask}</h3>
        <h4 className='w-1/5'>{e.taskCount.activeTask}</h4>
        <h4 className='w-1/5'>{e.taskCount.completedTask}</h4>
        <h4 className='w-1/5 text-red-500'>{e.taskCount.failedTask}</h4>
      </div>
    )
  })}
    </div>
 
</div>
    </div>
    
  );
};

export default CreateTask;
