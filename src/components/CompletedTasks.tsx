import React, { ChangeEvent } from 'react'
import TaskCard from './TaskCard'
import { Task } from '../App'

type Props = {
    taskList: Task[],
    handleCheckChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CompletedTasks = ({ taskList, handleCheckChange }: Props) => {
    return (
        <div className='p-4'>
            <h2 className='text-md uppercase font-bold mb-2'>
                Completed
            </h2>
            {taskList.length === 0 ? <h5 className='text-center text-gray-400 font-medium'> No tasks yet.</h5> :
                <section className='flex flex-col gap-2'>
                    {taskList.map((task) => (
                        <TaskCard handleCheckChange={handleCheckChange} task={task} key={task.id} />
                    ))}
                </section>
            }
        </div>
    )
}

export default CompletedTasks