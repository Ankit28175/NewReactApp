import React from 'react'
import Header from '../others/Header'
import TaskStatus from '../others/TaskStatus'
import Tasklist from '../tasklist/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='bg-gray-200 h-screen w-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskStatus data={props.data} />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashboard