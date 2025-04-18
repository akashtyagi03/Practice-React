import { useEffect, useState } from 'react'
import './App.css'
import Weathercard from './component/Weathercard'

function App() {
  const [city, setCity] = useState("")
  const [temp, setTemp] = useState("30%")
  const [condition, setCondition] = useState("sunny")
  const [text, setText] = useState("")

  const changecity = () => {
    setCity(text)
    setText("")
  }

  return (
    <>
      <h2>Todo app</h2>
      <div>

        <input type="text" value={text}
          placeholder='enter city name'
          onChange={(e) => { setText(e.target.value) }} />
        <button onClick={changecity}>search</button>
      </div>
      <br />

      <Weathercard city={city} temprature={temp} condition={condition} />
      {/* <br />
    <Weathercard city={city} temprature={temp} condition={condition}/>
    <br />
    <Weathercard city={city} temprature={temp} condition={condition}/>
    <br />
    <Weathercard city={city} temprature={temp} condition={condition}/> */}
    </>
  )
}

export default App
