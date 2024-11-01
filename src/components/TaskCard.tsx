import React, { ChangeEvent } from 'react'
import CustomCheckButton from './CustomCheckButton'
import { Task } from '../App'

type Props = {
    task: Task,
    handleCheckChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TaskCard = ({ task, handleCheckChange }: Props) => {
    return (
        <section className='flex items-center gap-2 bg-white p-4 rounded-md shadow-sm border border-black/10'>
            <CustomCheckButton id={task.id} isChecked={task.isCompleted} handleCheckChange={handleCheckChange} />
            <h5 className='font-semibold'>{task.task}</h5>
        </section>
    )
}

export default TaskCard