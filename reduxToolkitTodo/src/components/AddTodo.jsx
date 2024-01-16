import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from  '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('') 
    const dispatch = useDispatch() // ye syntax hai   dispatch ka

    // method banana hai

    const addTodoHandler = (e) => {
        e.preventDefault()
        // dispatch ka use karo 
        // dispatch reducer ka use kar te hue store ko value add kar te hai / ya changes kar ta hai
        dispatch(addTodo(input))
        setInput('') // kam bekar huva to use ka clean honga is se 
    }


  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input type="text"
        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500
        focus:ring-2
        '
        placeholder="Enter a Todo../"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        />
        <button 
        type='submit'
        className=''> Add Todo

        </button>
    </form>
  )
}

export default addTodo
