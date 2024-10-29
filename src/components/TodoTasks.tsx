import React from 'react'
import TaskCard from './TaskCard'

const TodoTasks = () => {
    return (
        <div className='p-4'>
            <h2 className='text-md uppercase font-bold mb-2'>
                To do
            </h2>
            <TaskCard />
        </div>
    )
}

export default TodoTasks