import { useState } from 'react'
import './App.css'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleincrease(){
    setCount(count + 1)
  }
  function handledeacrease(){
    setCount(count - 1)
  }



  return (
    <>
    <Button onClick={handleincrease} para={"increment"}/>
    <Button onClick={handledeacrease} para={"decrement"}/>
    <br />
    <p>count: {count}</p>
    </>
  )
}

export default App
