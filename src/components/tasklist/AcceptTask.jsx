import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div id='tasklist' className='overflow-auto p-4 items-center text-white flex-shrink-0 bg-red-500 rounded-2xl m-3  w-[25%] h-[230px]' >
            <div className='flex  items-center justify-between p-3'>
                <h1  className=' bg-red-700 p-1 rounded'>{data.task_category}</h1>
                <h2 >{data.task_date}</h2>
            </div>
            <h1 className=' font-bold text-2xl mb-3'>{data.task_name}</h1>
            <p>{data.task_description}</p>
            <div>
                <button className=' bg-green-500 py-1 px-2 rotate'>Accept Task</button>
            </div>
        </div>
  )
}

export default AcceptTask