import React from 'react'
import TaskCard from './TaskCard'

const CompletedTasks = () => {
    return (
        <div className='p-4'>
            <h2 className='text-md uppercase font-bold mb-2'>
                Completed
            </h2>
            <TaskCard />
        </div>
    )
}

export default CompletedTasks