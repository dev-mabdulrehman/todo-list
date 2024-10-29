import React from 'react'
import CustomCheckButton from './CustomCheckButton'

const TaskCard = () => {
    return (
        <section className='flex items-center gap-2 bg-white p-4 rounded-md shadow-sm border border-black/10'>
            <CustomCheckButton />
            <h5 className='font-semibold'>Task</h5>
        </section>
    )
}

export default TaskCard