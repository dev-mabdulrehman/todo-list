import { ChangeEvent, FormEvent, useState } from "react";

const AddTaskForm = () => {
    const [task, setTask] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    }

    return (
        <form className='p-4 relative' onSubmit={handleSubmit}>
            <input onChange={handleInputChange(setTask)} value={task} type="text" placeholder='Add Task' className='w-full border outline-none active:border-black/80  focus:border-black/80 border-black/30 rounded-3xl py-2 px-4' />
            <button type="submit" className='absolute flex items-center justify-center w-8 h-8 rounded-full bg-blue-800 text-white hover:bg-blue-900 top-1/2 right-6 -translate-y-1/2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </form>
    )
}

export default AddTaskForm