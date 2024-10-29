import React from 'react'

const AddTaskForm = () => {
    return (
        <section className='p-4'>
            <input type="text" placeholder='Add Task' className='w-full border outline-none active:border-black/80  focus:border-black/80 border-black/30 rounded-3xl py-2 px-4' />
        </section>
    )
}

export default AddTaskForm