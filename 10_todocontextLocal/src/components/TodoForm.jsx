import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

/**
 * The TodoForm component is a form that allows users to input and add new todos.
 * @returns The TodoForm component is returning a form element with an input field and a button. The
 * input field is used to enter a todo item, and the button is used to add the todo item to the list.
 */
function TodoForm() {
     const [todo, setTodo] = useState("")
     const {addTodo} = useTodo()

     const add = (e) => {
        e.preventDefault()

        if (!todo) return 

        addTodo({ todo, completed: false})
        setTodo("")
     }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e) => setTodo(e.target.value)}
                
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

