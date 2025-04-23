import React, { useContext } from 'react'
import { Language } from './Language'

const Greeting = () => {
    const { language } = useContext(Language)

  return (
    <div>
      <h1>{language === "en" ? "hello" : "Namaste"}</h1>
    </div>
  )
}

export default Greeting
