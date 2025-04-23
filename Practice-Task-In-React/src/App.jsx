import Greeting from "./component/Greeting";
import { Language } from "./component/Language";
import { useState } from "react";
import Languageswitch from "./component/Languageswitch";

function App() {
  const [language, setLanguage] = useState("en")
 
  return (
    <Language.Provider value={{language, setLanguage}}>
      <Greeting/>
      <Languageswitch/>
    </Language.Provider>
  );
}

export default App;
