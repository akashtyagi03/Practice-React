import { use, useEffect, useState, createContext } from 'react'
import './App.css'
import Studentlist from './component/Nameinput';
import Nameinput from './component/Nameinput';
import Display from './component/Display';

  function App() {
    const [name, setName] = useState("")
    const [roll, setRoll] = useState("")
    const [submitted, setSubmitted] = useState(null)
  
    function handlename(e){
      setName(e.target.value);
    }
    function handleroll(e){
      setRoll(e.target.value);
    }
    function handlesubmit(e){
      e.preventDefault();
      setSubmitted({name, roll})
      setName("") 
      setRoll("")
    }
    return (
      <>
      <form onSubmit={handlesubmit}>
        <Nameinput onChange={handlename} value={name} type={"text"}/>
        <Nameinput onChange={handleroll} value={roll} type={"number"}/>
        <button type='submit' disabled={!name || !roll}>submit</button>
      </form>
      {submitted && <Display name={submitted.name} roll={submitted.roll}/>}
      </>
    )
  }

  export default App
