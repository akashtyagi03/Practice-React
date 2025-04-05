import { useState, useEffect, useRef } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const inputref = useRef(0);

  function handleclick(){
    inputref.current.focus();
  }
  
  return (
    <div>
      <h1>form submission</h1>
      <div>
        <input type="text"
        placeholder='enter name here'
        ref={inputref}
        />
        <button onClick={handleclick}>
          click me 
        </button>
        <input type="text"
        placeholder='enter name here'
        ref={inputref}
        />
      </div>
    </div>
  )
}

export default App
