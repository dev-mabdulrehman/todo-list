import { ChangeEvent, useCallback } from 'react'
import TaskCard from './TaskCard'
import { Task } from '../App'
import { useTodoListContext } from '../context/TodoListContext'

type Props = {
    heading: string,
    taskList: Task[]
}

const TaskList = ({ heading, taskList }: Props) => {
    const { setTaskList, setTask } = useTodoListContext();

    const handleTaskStatusChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const id = (e.target.getAttribute("data-id") as unknown as number);
        setTaskList(prevState => {
            const taskIdx = prevState.findIndex(ps => Number.parseInt(ps.id.toString()) === Number.parseInt(id.toString()));
            if (taskIdx !== -1) {
                prevState[taskIdx].isCompleted = !prevState[taskIdx].isCompleted;
            }
            return [...prevState];
        });
    }, [setTaskList]);

    const handleDeleteTask = useCallback((id: number) => {
        setTaskList(prevState => {
            prevState = prevState.filter(ps => ps.id !== id);
            return [...prevState];
        });
    }, [setTaskList]);

    const handleEditTask = useCallback((task: Task) => {
        setTask(task);
    }, [setTask]);

    return (
        <div className='p-4'>
            <h2 className='text-md uppercase font-bold mb-2'>
                {heading}
            </h2>
            {taskList.length === 0 ? <h5 className='text-center text-gray-400 font-medium'> No tasks yet.</h5> :
                <section className='flex flex-col gap-2'>
                    {taskList.map((task) => (
                        <TaskCard handleCheckChange={handleTaskStatusChange} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} task={task} key={task.id} />
                    ))}
                </section>
            }
        </div>
    )
}

export default TaskList