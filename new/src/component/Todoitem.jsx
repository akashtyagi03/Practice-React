import React from 'react'

const Todoitem = ({todo, ondelete}) => {
  return (
    <div>
      {todo.text}
      <button onClick={()=> ondelete(todo.id)}>delete</button>
    </div>
  )
}

export default Todoitem
