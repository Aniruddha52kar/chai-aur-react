import { useEffect, useState } from 'react'
import { TodoProvider} from './context'
import { TodoForm,TodoItem } from './components/'
import './App.css'


function App() {

  // basic context 
  const [todos, setTodos] = useState([]) // empty array is liye jo aaye ga wo empt rahe ga 
  
  const addTodo = (todo) => {
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

 const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id === id ? todo : prevTodo)) ) 

 }
 const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
 }

 const toggleComplete = (id) =>{
  setTodos((prev)=> prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo ))
 }

 // basic context khatam

 //local storage  
 // local storage me sirf do tems hote hai 
 //1. set item  2. get item

 // jab tak aap react me ho jab tak aap server rendering ki bat nahi kre ho

 useEffect(() => {
 const todos = JSON.parse( localStorage.getItem("todos")) // itna hi hai local storage 50% ho gya
 if (todos && todos.length > 0) {
  setTodos(todos)

 }
 }, [])

 // multiple useEffect le sakh te hai ek se jada 

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))

 }, [todos])




  return (
   <TodoProvider value ={{todos, addTodo, updateTodo, toggleComplete, deleteTodo}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* {Loop and Add TodoItem here} */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo ={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
