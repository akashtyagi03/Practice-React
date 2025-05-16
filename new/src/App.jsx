import { createContext, useState } from 'react'
import './App.css'
import Child1 from './component/Child1'

const Usercontext = createContext();

function App() {
  const [count, setCount] = useState("hello there")

  const massage = "hi there";

  return (
    <>
    <Usercontext.Provider value={massage}>
      <div>
      <h1>App Component</h1>
      <Child1/>
    </div>
    </Usercontext.Provider>
    </>
  )
}

export default App
export {Usercontext}
