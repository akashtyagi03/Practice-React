import React, { useContext } from 'react'
import { Language } from './Language'

const Languageswitch = () => {
    const { setLanguage } = useContext(Language)

  return (
    <div>
      <button onClick={()=>setLanguage("en")}>English</button>
      <br />
      <button onClick={()=>setLanguage("hi")}>Hindi</button>
    </div>
  )
}

export default Languageswitch
