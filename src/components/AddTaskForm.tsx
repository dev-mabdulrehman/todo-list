import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../App";
import { useTodoListContext } from "../context/TodoListContext";


const AddTaskForm = () => {
    const { setTaskList } = useTodoListContext();
    const [task, setTask] = useState<string>("");

    const onTaskAdded = (task: Task) => {
        setTaskList((prevState) => ([...prevState, task]))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (task != "") {
            onTaskAdded({
                task,
                isCompleted: false,
                id: Math.floor(Math.random() * 10000000) + 1
            });
            setTask("");
        }
    }

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    }

    return (
        <form className='p-4 relative' onSubmit={handleSubmit}>
            <input onChange={handleInputChange(setTask)} value={task} type="text" placeholder='Add Task' className='w-full border outline-none active:border-black/80 focus:border-black/80 border-black/30 rounded-3xl py-2 px-4 pr-12' />
            <button type="submit" className='absolute flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 text-white hover:bg-blue-900 top-1/2 right-6 -translate-y-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </form>
    )
}

export default AddTaskForm