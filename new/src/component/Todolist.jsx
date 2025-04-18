import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({todo, ondelete}) => {
  return (
    <ul>
      {todo.map(todo => (
        <Todoitem key={todo.id} todo={todo} ondelete={ondelete}/>
      ))}
    </ul>
  )
}

export default Todolist
