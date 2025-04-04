import { useState, useEffect } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const [ count, setCount ] = useState();
  


  return (
    <>
      <div style={{ 
  backgroundColor: count || "white", // Entire div changes color
  padding: "20px",
  minHeight: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}}>
        <h1>change color of div</h1>
        <input type="text" 
        value={count}
        placeholder='Enter color here'
        onChange={(e) => setCount(e.target.value)}
        />
        {/* {count && <div style={{ backgroundColor: count, width: "200px", 
      height: "100px", 
      marginTop: "10px" }}></div>}
        {!count && <div style={{ backgroundColor: 'white' }}></div>} */}
        
      </div>
    </>
  )
}

export default App
