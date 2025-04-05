import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

 function expensivetask(num){
  console.log("inside expensive function");
  for(let i=0; i<1000000000; i++){}
  return num*2;
 }
  const doublevalue = useMemo(() => expensivetask(value), [value]);

  return (
    <div>
    <h1>counter app</h1>
    <p>counter is : {counter}</p>

    <button onClick={()=>{setCounter(counter+1)}}>increment</button>

    <div>
      <input type="number"
      value={value}
      placeholder='enter number for doubling'
      onChange={(e)=>{setValue(e.target.value)}} />
      <h1>double value is : {doublevalue}</h1>
    </div>
    </div>
  )
}

export default App
