import React, { useState } from 'react'
import { VscAdd } from "react-icons/vsc";
const ToDoMenu = () => {

    const [task,setTask] = useState('');
    return (
        <div className = 'mx-auto mt-8'> 
            <div className = 'flex item-center justify-center mb-4'>
                <input type="text" 
                className = 'w-[350px] border-2 border-blue-900 bg-gradient-to-r from-sky-900 via sky-500 to-indigo-200 font-bold rounded-md px-3 py-2 mr-3 placeholder:text-white'
                placeholder='Enter Task Name...'
                />
                <button className='bg-blue-500 hover:bg-blue-600 font-bold py-4 px-4
                rounded'>
                    <VscAdd />
                </button>
            </div>
        </div>
    )
}

export default ToDoMenu