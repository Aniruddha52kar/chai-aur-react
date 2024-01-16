//1st  method dalo 
// nanoid - unique id genrate kar ta hai 
import {createSlice, nanoid} from'@reduxjs/toolkit';


// alag se declear kar do wo accha hota hai initialState ko
const initialState = {
    todo: [{id:1, text:'hello world'}]

}

export const todoSlice = createSlice({
    // teen chij chaiye hoti hai aap ne ko Name, initialState, reducers
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = {
                id:nanoid(),//     5.new id chale gai hai nono id 
                text: action.payload //    6.payload aapne aap me property hai
            }
            state.todo.push(todo) // 7. state kese use kar te hai aur action kese use kar te hai
        },// do chijo ka mile gi  1.state 2.action

        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )

        }, 
    } // yaha likh diye aapn ne 

    //     updateTodo :(state, action) =>{
    //         const todo ={
    //             id:nanoid(),
    //             text:action.payload

    //         }
          
    //         state.todo.push(todo)
    //     },

    //     deleteTodo:(state, action) =>{ 
    //         state.todos = state.todo.filter((todo)=> todo.id !== action.payload)


    // } // 4. id laga na padhe ga wo value kaha se mile gi wo action mese mile gi
})

//state ->  current state of jo bhi state hai
//action-> ke under jo bhi data pass hora hai



export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer // indivical bhi ko aise hi export kar n padhe ga  same syntex me 
// ye components me kam me aaye ge 

// 8. is ke do step hai 2 part export kar na hai steps hai