import React from 'react'

const NewTask = () => {
  return (
    <div id='tasklist' className='overflow-auto p-4 items-center text-white flex-shrink-0 bg-yellow-500 rounded-2xl m-3  w-[25%] h-[230px]' >
    <div className='flex  items-center justify-between p-3'>
        <h1  className=' bg-yellow-700 p-1 rounded'>{data.task_category}</h1>
        <h2 >{data.task_date}</h2>
    </div>
    <h1 className=' font-bold text-2xl mb-3'>{data.task_name}</h1>
    <p>{data.task_description}</p>
    <button>Accept</button>
    </div>
  )
}

export default NewTask