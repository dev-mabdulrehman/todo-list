import React, { useState } from 'react'

const CustomCheckButton = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <label role='checkbox' className={`w-6 h-6 cursor-pointer rounded-full flex items-center justify-center border-2 border-black/20 ${isChecked ? 'bg-green-200' : ''}`}>
            {isChecked &&
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
            }
            <input type="checkbox" onChange={() => setChecked(prevState => !prevState)} className='hidden' />
        </label>
    )
}

export default CustomCheckButton