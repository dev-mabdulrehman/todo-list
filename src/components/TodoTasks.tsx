import { ChangeEvent } from 'react'
import { Task } from '../App'
import TaskCard from './TaskCard'

type Props = {
    taskList: Task[],
    handleCheckChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TodoTasks = ({ taskList, handleCheckChange }: Props) => {
    return (
        <div className='p-4'>
            <h2 className='text-md uppercase font-bold mb-2'>
                To do
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

export default TodoTasks