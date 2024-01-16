/* This code is creating a context for managing todo items in a React application. */
import { createContext, useContext } from "react";

//context -  yane kis chij ke bare me bat kar na sign up ke bare me login ke bare me bat kar na  

export const TodoContext = createContext({
//context banyae ge array ke is se 
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,

        }
    ],

   addTodo:(todo) => {},
   updateTodo:(id, todo) =>{},
   deleteTodo:(id) => {},
   toggleComplete:(id) => {}

})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider