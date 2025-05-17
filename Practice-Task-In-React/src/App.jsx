import { useEffect, useState } from "react";
import { TodoProvider } from "./component";
import Todoform from "./todocomponent/Todoform";
import Todoitem from "./todocomponent/Todoitem";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prevtodo)=> [{id:Date.now(), ...todo}, ...prevtodo])
  }

  const updateTodo = (todo, id)=>{
    setTodos((prevtodos)=> prevtodos.map((prevtodo)=>(prevtodo.id===id?todo:prevtodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=> prevtodo.id !== id))
  }

  const toggelTodo = (id)=>{
    setTodos((prev)=> prev.map((prevtodo)=> prevtodo.id===id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length){
      setTodos(todos)
    }
  },[])
 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggelTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id}
              className="w-full">
                <Todoitem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
