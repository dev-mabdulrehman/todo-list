import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../App";
import { useTodoListContext } from "../context/TodoListContext";


const WriteTaskForm = () => {
    const { setTaskList, task, setTask } = useTodoListContext();

    const onTaskAdded = (task: Task) => {
        setTaskList((prevState) => ([...prevState, task]))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (task.task != "") {
            if (task.id !== "") {
                setTaskList(prevState => {
                    const taskIdx = prevState.findIndex(ps => ps.id === task.id);
                    prevState[taskIdx] = task;
                    return [...prevState];
                })
            } else {
                onTaskAdded({
                    task: task.task,
                    isCompleted: false,
                    id: Math.floor(Math.random() * 10000000) + 1
                });
            }
            setTask({ task: "", id: "", isCompleted: false });
        }
    }

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<Task>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter({ id: task.id, task: e.target.value, isCompleted: task.isCompleted });
    }

    return (
        <form className='p-4 relative' onSubmit={handleSubmit}>
            <input onChange={handleInputChange(setTask)} value={task.task} type="text" placeholder='Add Task' className='w-full border outline-none active:border-black/80 focus:border-black/80 border-black/30 rounded-3xl py-2 px-4 pr-12' />
            <button type="submit" className='absolute flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 text-white hover:bg-blue-900 top-1/2 right-6 -translate-y-1/2'>
                {task.id === "" ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                }
            </button>
        </form>
    )
}

export default WriteTaskForm