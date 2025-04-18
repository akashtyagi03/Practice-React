import React, { useState } from 'react'

const Todoform = ({ onadd }) => {
    const [text, setText] = useState("")

    function handlesubmit(e){
        e.preventDefault();
        if (text.trim()){
            onadd(text)
            setText("");
        }
    };

  return (
    <form onSubmit={handlesubmit}>
        <input type="text" value={text} 
        placeholder='enter todo'
        onChange={(e)=>setText(e.target.value)}
        />
        <button type='submit'>Add</button>
    </form>
    
  )
}

export default Todoform
