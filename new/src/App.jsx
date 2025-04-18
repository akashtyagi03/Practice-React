import { useEffect, useState } from 'react'
import './App.css'
import Todoform from './component/Todoform.jsx'
import Todolist from './component/Todolist';

function App() {
  const [todo, setTodo] = useState([]);
  
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodo([...todo, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter(todo => todo.id !== id));
  };


  return (
    <>
    <h2>Todo app</h2>
    <Todoform onadd={addTodo}/>
    <Todolist todo={todo} ondelete={deleteTodo}/>

    </>
  )
}

export default App
